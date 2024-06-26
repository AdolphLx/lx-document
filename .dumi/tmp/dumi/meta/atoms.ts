// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
export const components = {
  "PUBLIC_ONCOPY": {
    "type": "COMPONENT",
    "id": "PUBLIC_ONCOPY",
    "title": "PUBLIC_ONCOPY",
    "propsConfig": {
      "type": "object",
      "required": [
        "value"
      ],
      "className": "__type",
      "properties": {
        "value": {
          "type": "string",
          "description": "要复制的文本内容",
          "tags": {
            "description": "要复制的文本内容",
            "default": "\"默认值\""
          },
          "default": "默认值"
        }
      }
    }
  },
  "PUBLIC_GETDATE": {
    "type": "COMPONENT",
    "id": "PUBLIC_GETDATE",
    "title": "PUBLIC_GETDATE",
    "propsConfig": {
      "type": "object",
      "required": [
        "date",
        "type"
      ],
      "className": "__type",
      "properties": {
        "date": {
          "type": "string",
          "description": "时间毫秒数",
          "tags": {
            "description": "时间毫秒数",
            "default": "\"默认值\""
          },
          "default": "默认值"
        },
        "type": {
          "type": "string",
          "enum": [
            "month",
            "text"
          ],
          "description": "类型month时间单位为中文",
          "tags": {
            "description": "类型month时间单位为中文",
            "default": "\"默认值\""
          },
          "default": "默认值"
        }
      }
    }
  },
  "PUBLIC_DOWN": {
    "type": "COMPONENT",
    "id": "PUBLIC_DOWN",
    "title": "PUBLIC_DOWN",
    "propsConfig": {
      "type": "object",
      "required": [
        "date"
      ],
      "className": "__type",
      "properties": {
        "date": {
          "type": "string",
          "description": "结束倒计时时间",
          "tags": {
            "description": "结束倒计时时间",
            "default": "\"默认值\""
          },
          "default": "默认值"
        }
      }
    }
  }
};
