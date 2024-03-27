/**
 * @name UploadOss组件
 * @name 前端直传oss
 * @name 2024-01-01 liuxiang
 */
import React, { useState, useCallback, useEffect } from 'react';
import './index.less';
import { useLocation } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { Icon } from '..';
import zhCN from "antd/locale/zh_CN";
import { message, Image, Progress, ConfigProvider } from 'antd';
import {
  UploadFile,
  UploadProps,
  ResultsLists,
  FileTypes,
} from '../../index.type';
import { ReactSortable } from 'react-sortablejs';
let imgLists: Array<UploadFile> = [];
let fileLists: Array<UploadFile> = [];
let isMessage = true;

function UploadOss(props: UploadProps): JSX.Element {
  const location = useLocation();
  const [messageApi, contextHolder] = message.useMessage();
  const [imgUrl, setImgUrl] = useState<Array<UploadFile>>([]);
  const [fileList, setFileList] = useState<Array<UploadFile>>([]);
  const iconClassName: any = {
    normal: 'icon-jiazai--xian',
    success: 'icon-order',
    exception: 'icon-yujing'
  };

  const uploadTypes = props.type ? props.type.map(s => FileTypes[s]) : [];
  const fileListFn = async (
    file: UploadFile,
    index?: number,
    uploadPercent?: number,
  ) => {
    //图片视频
    if (file.type.includes('image') || file.type.includes('video')) {
      if (index || index === 0) {
        const newImgUrlLists = imgLists[index];
        newImgUrlLists.uploadPercent = uploadPercent ? uploadPercent : -1;
        uploadPercent && uploadPercent < 0
          ? (newImgUrlLists.status = 'exception')
          : uploadPercent && uploadPercent === 100
          ? (newImgUrlLists.status = 'success')
          : (newImgUrlLists.status = 'normal');
        imgLists.splice(index, 1, newImgUrlLists);
      } else {
        imgLists.push(file);
      }
      setImgUrl(
        imgLists.map((s, index) => {
          s.id = index;
          return s;
        }),
      );
    } else {
      //文件
      if (index || index === 0) {
        const newFileLists = fileLists[index];
        newFileLists['uploadPercent'] = uploadPercent ? uploadPercent : -1;
        uploadPercent && uploadPercent < 0
          ? (newFileLists.status = 'exception')
          : uploadPercent && uploadPercent === 100
          ? (newFileLists.status = 'success')
          : (newFileLists.status = 'normal');
        fileLists.splice(index, 1, newFileLists);
      } else {
        fileLists.push(file);
      }
      setFileList(
        fileLists.map((s, index) => {
          s.id = index;
          return s;
        }),
      );
    }
  };
  const formatSize = (size: number) => {
    const maxSize = Math.ceil(size / 1024);
    return maxSize < 1024
      ? maxSize.toFixed(2) + 'kb'
      : (maxSize / 1024).toFixed(2) + 'M';
  };
  const setFileLists = (type: number, newFile: Array<UploadFile>) => {
    type === 1 ? (imgLists = newFile) : (fileLists = newFile);
  };

  useEffect(() => {
    if (props.fileLists) {
      setFileList(props.fileLists);
      setFileLists(2, props.fileLists);
    }
    if (props.imgLists) {
      setImgUrl(props.imgLists);
      setFileLists(1, props.imgLists);
    }
  }, [props]);
  const setDataUrl = (e: UploadFile, indexKey: number) => {
    if (e.type.includes('image') || e.type.includes('video')) {
      imgLists[indexKey].url = e.url;
      setImgUrl(
        imgLists.map((s, index) => {
          s.id = index;
          return s;
        }),
      );
    } else {
      fileLists[indexKey].url = e.url;
      setFileList(
        fileLists.map((s, index) => {
          s.id = index;
          return s;
        }),
      );
    }
  };
  const onUpload = (e: Array<UploadFile>, reIndex?: number) => {
    // 处理上传逻辑
    const filesList = e.map(async (file: UploadFile, index: number) => {
      console.log(uploadTypes, uploadTypes.includes(file.type), file.type);
      const indexData =
        file.type.includes('image') || file.type.includes('video')
          ? imgLists
          : fileLists;
      // 处理文件和图片混合上传
      const imgUrlListsFilter = e.filter(
        item => item.type.includes('image') || item.type.includes('video'),
      ).length;
      const fileListsFilter = e.length - imgUrlListsFilter;
      const indexKeylLength =
        file.type.includes('image') || file.type.includes('video')
          ? imgUrlListsFilter
          : fileListsFilter;
      const indexKey = reIndex
        ? reIndex
        : indexData.length - indexKeylLength + index;
      //
      return new Promise((resolve, reject) => {
        if (props.type && !uploadTypes.includes(file.type)) {
          messageApi.open({
            type: 'error',
            content: `只能上传${props.type}类型的文件`,
          });
          isMessage = false;
          fileListFn(file, indexKey, -1);
          return reject(file);
        } else if (props.size && props.size < file.size / 1024) {
          messageApi.open({
            type: 'error',
            content: `文件大小不能超过${formatSize(props.size * 1024)}`,
          });
          isMessage = false;
          fileListFn(file, indexKey, -1);
          return reject(file);
        } else {
          isMessage = true;
          window.$UPLOAD.oneUpload(
            file,
            0,
            (e: Array<UploadFile>) => {
              if (e[0] && e[0].type) {
                setDataUrl(e[0], indexKey);
                return resolve(e[0]);
              } else {
                fileListFn(file, indexKey, -1);
                return reject(e);
              }
            },
            'sl-web-react',
            location.key,
            '',
            '',
            (progressEvent: any) => {
              const uploadPercent = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total,
              );
              fileListFn(file, indexKey, uploadPercent);
            },
          );
        }
      }).catch(() => {
        const fileReject = file;
        fileListFn(file, indexKey, -1);
        fileReject['rejectType'] = 'reject';
        return fileReject;
      });
    });
    Promise.all(filesList)
      .then((results: any) => {
        const resolveNum = results.filter(
          (s: UploadFile) => s.rejectType !== 'reject',
        ).length;
        const rejectNum = results.length - resolveNum;
        const content =
          resolveNum > 0
            ? `成功上传${resolveNum}个文件,失败${rejectNum}个`
            : `上传失败，请检查网络！`;
        isMessage &&
          messageApi.open({
            type: resolveNum ? 'success' : 'error',
            content: content,
          });
        const resultsLists: ResultsLists = {
          imgLists: imgLists.filter(r => uploadTypes.includes(r.type)),
          fileLists: fileLists.filter(r => uploadTypes.includes(r.type)),
        };
        resolveNum ? props.success(resultsLists) : props.fail(results);
      })
      .catch(err => {
        props.fail(err);
      });
  };

  const onDrop = useCallback((acceptedFiles: any) => {
    if (props.quantity && props.quantity < acceptedFiles.length) {
      messageApi.open({
        type: 'error',
        content: `只能上传${props.quantity}个文件`,
      });
      acceptedFiles = acceptedFiles.filter((s: UploadFile, index: number) =>
        props.quantity ? index < props.quantity : s,
      );
    }

    const acceptedFilesMap = acceptedFiles.map(
      async (rep: Blob, index: number) => {
        const indexData =
          rep.type.includes('image') || rep.type.includes('video')
            ? imgLists
            : fileLists;
        const indexKey = indexData.length + index;
        return new Promise(resolve => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(rep);
          fileReader.onload = () => {
            const result: UploadFile = {
              url: fileReader.result || '',
              size: acceptedFiles[index].size, // 0
              name: acceptedFiles[index].name,
              type: acceptedFiles[index].type,
              uploadPercent: 0,
              id: indexKey,
              status:
                props.quantity && props.quantity < index
                  ? 'exception'
                  : 'normal',
              file: acceptedFiles[index],
            };
            fileListFn(result);
            resolve(result);
          };
        });
      },
    );
    Promise.all(acceptedFilesMap).then(() => {
      onUpload(acceptedFiles);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
        <ConfigProvider theme={{token:{colorPrimary:'#000000'}}} locale={zhCN}>
      {contextHolder}
      <div {...getRootProps()} className="uploadOss">
        <input {...getInputProps()} />
        <div className="icon">
          <Icon type="icon-shangchuan" />
        </div>
        {isDragActive ? (
          <p>将文件拖放到此处...</p>
        ) : (
          <p>将一些文件拖放到此处，或单击以选择文件</p>
        )}
      </div>
      <div className="imgUrls">
        <ReactSortable list={imgUrl} setList={setImgUrl} className="imgUrls">
          {imgUrl.map((res: UploadFile, index) => {
            return (
              <div className="imgUrlItem" key={index}>
                <div>
                  {res.type.includes('image') ? (
                    <Image src={res.url} />
                  ) : (
                    <video muted controls src={res.url} />
                  )}
                  {res.status === 'normal' ? (
                    <div className="progressBox">
                      <Progress
                        type="circle"
                        percent={res.uploadPercent}
                        status={res.status}
                        className="progress"
                        size="small"
                      />
                    </div>
                  ) : res.status && res.status === 'exception' ? (
                    <div className="imgException">
                      <div
                        className="imgExceptionBtn"
                        onClick={() => {
                          onUpload([res.file], index);
                        }}
                      >
                        {res.status === 'exception' ? '重新上传' : ''}
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div
                  className="iconDelete"
                  onClick={() => {
                    const imgUrls = JSON.parse(JSON.stringify(imgUrl));
                    imgUrls.splice(index, 1);
                    setImgUrl(imgUrls);
                    setFileLists(1, imgUrls);
                  }}
                >
                  <Icon type="icon-delete" />
                </div>
              </div>
            );
          })}
        </ReactSortable>
      </div>
      <div className="fileLists">
        <ReactSortable
          list={fileList}
          setList={setFileList}
          className="fileList"
        >
          {fileList.map((res: UploadFile, index: number) => {
            return (
              <div className="fileItems" key={index}>
                <div className="fileItemLeft">
                  <div className="fileItemContent">
                    <span className={res.status === 'normal' ? 'loader' : ''}>
                      <Icon
                        type={
                          res.status
                            ? iconClassName[res.status]
                            : 'icon-jiazai--xian'
                        }
                      ></Icon>
                    </span>
                    <a
                      className={
                        (res.status ? res.status : 'normal') + '_color'
                      }
                      href={res.url}
                    >
                      {res.name}
                    </a>
                  </div>
                  {res.status ? (
                    <div
                      className={
                        (res.status ? res.status : 'normal') + '_color'
                      }
                      onClick={() => {
                        onUpload([res.file], index);
                      }}
                    >
                      {res.status === 'exception'
                        ? `重新上传(${formatSize(res.size)})`
                        : res.status === 'success'
                        ? `上传成功(${formatSize(res.size)})`
                        : ''}
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                {res.status === 'normal' ? (
                  <Progress
                    percent={res.uploadPercent}
                    status={res.status}
                    className="progress"
                    strokeWidth={2}
                  />
                ) : (
                  ''
                )}
                <div>
                  <div
                    className="delete"
                    onClick={() => {
                      const newFileLists = JSON.parse(JSON.stringify(fileList));
                      newFileLists.splice(index, 1);
                      setFileList(newFileLists);
                      setFileLists(2, newFileLists);
                    }}
                  >
                    <Icon type="icon-delete2" />
                  </div>
                </div>
              </div>
            );
          })}
        </ReactSortable>
      </div>
      </ConfigProvider>
    </div>
  );
}
export type { UploadFile, UploadProps, ResultsLists, FileTypes };
export default UploadOss
