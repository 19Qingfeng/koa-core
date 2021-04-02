1. 设计 mysql

```sql
-- database name wwp_admin
use wwp_admin

CREATE TABLE `sys_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `status` int(1) DEFAULT NULL, -- 0停用 1使用
  `role` int(1) -- 0 普通用户 1 管理员
  `remark` varchar(255) DEFAULT NULL,
  `create_ts` bigint(15) NOT NULL COMMENT '创建时间',
  `update_ts` bigint(15) NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `sys_user_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `method` varchar(128) DEFAULT NULL,
  `request_method` varchar(128) DEFAULT NULL,
  `oper_url` varchar(255) DEFAULT NULL,
  `oper_ip` varchar(128) DEFAULT NULL,
  `oper_location` varchar(128) DEFAULT NULL,
  `oper_param` varchar(255) DEFAULT NULL,
  `oper_user_id` int(11) NOT NULL,
  `json_result` varchar(255) DEFAULT NULL,
  `status` int(1) DEFAULT NULL,
  `create_ts` bigint(15) NOT NULL COMMENT '创建时间',
  `update_ts` bigint(15) NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- database name wwp_core
use wwp_core;
-- 人设
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(50) DEFAULT '' COMMENT '人设分类名称',
  `desc` varchar(512) DEFAULT '' COMMENT '说明',
  `count` int(10) DEFAULT 0 COMMENT '机器人数量',
  `create_ts` bigint(15) NOT NULL COMMENT '创建时间',
  `update_ts` bigint(15) NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `category_name` (`category_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(50) DEFAULT '' COMMENT '标签名称',
  `pid` int(11) '父节点Pid是 0 '
  `type` tinyint(1) comment '1 media, 2 category', '不可见标签是没有父级节点'
  `create_ts` bigint(15) NOT NULL COMMENT '创建时间',
  `update_ts` bigint(15) NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(255) DEFAULT NULL COMMENT '昵称',
  `avatar` varchar(265) DEFAULT COMMENT '头像',
  `gender` tinyint(4) DEFAULT 0 COMMENT '性别 0未知，1男，2女',
  `birthday` varchar(50) DEFAULT '' COMMENT '生日',
  `constellation` varchar(50) DEFAULT '' COMMENT '星座'
  `ethnicity` varchar(50) DEFAULT '' COMMENT '人种',
  `hometown` varchar(50) DEFAULT '' COMMENT '家乡',
  `profession` varchar(50) DEFAULT '' COMMENT '行业',
  `height` smallint(6) DEFAULT 0 COMMENT '身高',
  `body_type` varchar(10) DEFAULT 0 COMMENT '体型',
  `look_for` varchar(20) DEFAULT '' COMMENT '多选 look for',
  `vip_type` tinyint(1) DEFAULT 0 COMMENT '是否 VIP(0 表示不是, 1 表示是 VIP)',
  `is_approve` tinyint(1) DEFAULT 0 COMMENT '0 表示未认证，1 表示已认证',
  `bio` text DEFAULT '',
  `status` varchar(256) DEFAULT '',
  `user_status` tinyint(1) DEFAULT 1 COMMENT '1-->noraml 2-->block',
  `type` tinyint(1) DEFAULT 0 COMMENT '1 普通用户，2 接待员',
  `create_ts` bigint(15) NOT NULL COMMENT '创建时间',
  `update_ts` bigint(15) NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `user_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户ID',
  `cate_id` int(11) NOT NULL COMMENT '人设分类 ID',
  `create_ts` bigint(15) NOT NULL COMMENT '创建时间',
  `update_ts` bigint(15) NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `user_tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户ID',
  `tag_id` int(11) NOT NULL COMMENT '标签 ID',
  `create_ts` bigint(15) NOT NULL COMMENT '创建时间',
  `status` `1 显示 2隐藏`
  `update_ts` bigint(15) NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `category_tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cate_id` int(11) NOT NULL COMMENT '人设分类 ID',
  `tag_id` int(11) NOT NULL COMMENT '标签 ID',
  `create_ts` bigint(15) NOT NULL COMMENT '创建时间',
  `update_ts` bigint(15) NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `user_socials` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户 ID',
  `from_app` varchar(50) DEFAULT '' COMMENT '来自那个平台或者 app',
  `account_name` varchar(50) DEFAULT '' COMMENT '平台账号名称',
  `create_ts` bigint(15) NOT NULL COMMENT '创建时间',
  `update_ts` bigint(15) NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `user_origin_info` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户 ID',
  `local` varchar(50) DEFAULT '' COMMENT '国家及城市',
  `remark` text COMMENT '备注',
  `create_ts` bigint(15) NOT NULL COMMENT '创建时间',
  `update_ts` bigint(15) NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `user_album` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户 ID',
  `s_id` varchar(256) DEFAULT '' COMMENT '资源 ID',
  `media_type` varchar(256) DEFAULT '' COMMENT 'URL类型(image/video)',
  `thumb_url` varchar(256) DEFAULT '' COMMENT '缩略图地址',
  `media_url` varchar(256) DEFAULT '' COMMENT '资源地址',
  `order` tinyint(1) DEFAULT 0 COMMENT '排序',
  `create_ts` bigint(15) NOT NULL COMMENT '创建时间',
  `update_ts` bigint(15) NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB CHARSET=utf8mb4;

CREATE TABLE `user_story` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户 ID',
  `s_id` varchar(256) DEFAULT '' COMMENT '资源 ID',
  `media_type` varchar(256) DEFAULT '' COMMENT 'URL类型(image/video)',
  `thumb_url` varchar(256) DEFAULT '' COMMENT '缩略图地址',
  `media_url` varchar(256) DEFAULT '' COMMENT '资源地址',
  `order` tinyint(1) DEFAULT 0 COMMENT '排序',
  `status` tinyint(1) DEFAULT 0 COMMENT '资源状态 0 表示private，1 表示public',
  `create_ts` bigint(15) NOT NULL COMMENT '创建时间',
  `update_ts` bigint(15) NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB CHARSET=utf8mb4;


CREATE TABLE `chat_resources` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户 ID',
  `s_id` varchar(256) DEFAULT '' COMMENT '资源 ID',
  `media_type` varchar(256) DEFAULT '' COMMENT 'URL类型(image/video)',
  `thumb_url` varchar(256) DEFAULT '' COMMENT '缩略图地址',
  `media_url` varchar(256) DEFAULT '' COMMENT '资源地址',
  `type` tinyint(1) DEFAULT 0 COMMENT '资源状态 1 表示quick chat，2 表示chat content',
  `create_ts` bigint(15) NOT NULL COMMENT '创建时间',
  `update_ts` bigint(15) NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB CHARSET=utf8mb4;

CREATE TABLE `media_tags` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户 ID',
  `s_id` varchar(256) DEFAULT '' COMMENT '资源 ID',
  `type` varchar(50) DEFAULT '' COMMENT '资源分类 album/avatar/story',
  `t_id` int(5) NOT NULL COMMENT 'tag ID',
  `create_ts` bigint(15) NOT NULL COMMENT '创建时间',
  `update_ts` bigint(15) NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
)  ENGINE=InnoDB CHARSET=utf8mb4;

```
