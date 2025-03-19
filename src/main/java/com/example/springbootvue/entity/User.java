package com.example.springbootvue.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("users")
@Data
public class User {
    @TableId(type = IdType.AUTO)       // 主键自增
    private Integer id;
    private String username;
    private String password;
//    @TableField("nick_name")
    private String nickname;
    private Integer age;
    private String sex;
    private String address;
}
