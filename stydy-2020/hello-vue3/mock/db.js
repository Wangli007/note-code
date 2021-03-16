/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-var */
var Mock = require("mockjs");

const CARDS = Mock.mock({
  error: null,
  status: "success",
  "result|10": [
    {
      // 生成10个状态列
      column_id: "@guid",
      "card_list|20": [
        {
          // 状态列下有20张卡片
          id: "@guid", // 卡片ID
          subject: "@title", // 卡片主题
          sequence: /\d{8}/, // 卡片序列号
          index: "@integer(1, 100)", // 序号（用于拖动排序）
          archived: "@boolean", // 是否已归档
          blocked: "@boolean", // 是否设置阻塞
          is_parent: "@boolean", // 是否父卡片
          createdOn: "@date", // 创建时间
          updatedOn: "@date", // 最近更新时间
          parent: {
            // 父卡片
            id: "@guid",
            name: "@cword(2,10)",
          },
          board: {
            // 卡片所在的看板
            id: "@guid",
            name: "@cword(2,10)",
          },
          column: {
            // 状态列
            id: "@guid",
            name: "@cword(2,10)",
            type: "@string('upper', 2, 20)",
            deleted: "@boolean",
          },
          card_type: {
            // 卡片类型
            color: "@color",
            name: "@cword(2,10)",
            icon: /icon-[a-z]-{1-3}/,
            id: "@integer(1, 100)",
          },
          author: {
            // 卡片作者
            name: "@name",
            id: "@guid",
            nick_name: "@name",
            gender: "@string('lower', 4)",
          },
          updater: {
            // 最近更新者
            name: "@name",
            id: "@guid",
            nick_name: "@name",
            gender: "@string('lower', 4)",
          },
        },
      ],
    },
  ],
});

const API = () => ({
  cards: CARDS,
});

module.exports = API;
