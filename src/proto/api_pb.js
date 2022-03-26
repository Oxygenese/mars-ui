/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict'

var $protobuf = require('protobufjs/light')

var $root = ($protobuf.roots['default'] || ($protobuf.roots['default'] = new $protobuf.Root()))
  .addJSON({
    api: {
      nested: {
        Request: {
          fields: {
            requestId: {
              type: 'string',
              id: 1
            },
            operate: {
              type: 'Operate',
              id: 2
            },
            data: {
              type: 'bytes',
              id: 3
            }
          }
        },
        Reply: {
          fields: {
            requestId: {
              type: 'string',
              id: 1
            },
            code: {
              type: 'uint32',
              id: 2
            },
            data: {
              type: 'bytes',
              id: 3
            },
            message: {
              type: 'string',
              id: 4
            }
          }
        },
        Operate: {
          values: {
            QueryAppConfig: 0,
            QuerySysConfigSet: 1,
            QuerySysConfigPage: 2,
            UpdateSysConfigSet: 3,
            UpdateSysConfig: 4,
            QuerySysConfigById: 5,
            QuerySysConfigByKey: 6,
            CreateSysConfig: 7,
            DeleteSysConfig: 8,
            UpdateSysUser: 10,
            CreateSysUser: 11,
            FindSysUser: 12,
            QuerySysUserInfo: 13,
            QuerySysUserPage: 14,
            QuerySysUserById: 15,
            ChangeSysUserStatus: 16,
            QuerySysUserProfile: 17,
            UpdateSysUserPwd: 18,
            ResetSysUserPwd: 19,
            DeleteSysUser: 20,
            QuerySysMenuRole: 21,
            QuerySysRolePage: 22,
            QuerySysRoleById: 23,
            CreateSysRole: 24,
            UpdateSysRole: 25,
            ChangeSysRoleStatus: 26,
            DeleteSysRole: 27,
            UpdateSysRoleDataScope: 28,
            QuerySysMenuTreeSelect: 41,
            QuerySysMenuPage: 42,
            QuerySysMenuById: 43,
            CreateSysMenu: 44,
            UpdateSysMenu: 45,
            DeleteSysMenu: 46,
            QueryDictDataSelect: 61,
            QuerySysDeptTree: 81,
            QuerySysDeptTreeRoleSelect: 82,
            QuerySysPostPage: 101
          }
        }
      }
    },
    google: {
      nested: {
        protobuf: {
          nested: {
            Any: {
              fields: {
                type_url: {
                  type: 'string',
                  id: 1
                },
                value: {
                  type: 'bytes',
                  id: 2
                }
              }
            }
          }
        }
      }
    }
  })

module.exports = $root
