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
            ExportSysUser: 31,
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
            QueryDictDataByCode: 62,
            QueryDictDataPage: 63,
            CreateDictData: 64,
            UpdateDictData: 65,
            DeleteDictData: 66,
            QueryDictTypePage: 71,
            QueryDictTypeById: 72,
            CreateDictType: 73,
            UpdateDictType: 74,
            DeleteDictType: 75,
            ExportDictType: 76,
            QueryDictTypeOptionSelect: 77,
            QuerySysDeptTree: 81,
            QuerySysDeptTreeRoleSelect: 82,
            QuerySysDeptById: 83,
            QuerySysDeptPage: 84,
            UpdateSysDept: 85,
            DeleteSysDept: 86,
            QuerySysPostPage: 101,
            QuerySysPostById: 102,
            CreateSysPost: 103,
            UpdateSysPost: 104,
            DeleteSysPost: 105
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
