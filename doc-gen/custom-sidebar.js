let commonObj = require('../../../src/common');
let sidebarObj = {
    docs: [
        {
            type: 'category',
            label: 'Team Info',
            items: [
                {
                    type: 'doc',
                    id: 'team-info/priya'
                },
                {
                    type: 'doc',
                    id: 'team-info/ravi'
                },
                {
                    type: 'doc',
                    id: 'team-info/leela'
                },
            ]
        },
    ]
};
sidebarObj = commonObj.CommonCls.addSideBarPathsPrefix(sidebarObj);
module.exports = sidebarObj;