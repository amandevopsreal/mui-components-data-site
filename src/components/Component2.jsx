import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import TreeItem from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Grid } from '@material-ui/core'

const departmentsData = [
    {
        id: 1,
        name: 'customer_service',
        subDepartments: [
            { id: 11, name: 'support' },
            { id: 12, name: 'customer_success' },
        ],
    },
    {
        id: 2,
        name: 'design',
        subDepartments: [
            { id: 21, name: 'graphic_design' },
            { id: 22, name: 'product_design' },
            { id: 23, name: 'web_design' },
        ],
    },
];

const DepartmentTree = () => {
    const [expanded, setExpanded] = useState([]);
    const [checked, setChecked] = useState([]);

    const handleToggle = (nodeIds) => {
        setExpanded(nodeIds);
    };

    const handleCheck = (nodeId) => () => {
        setChecked((prevChecked) =>
            prevChecked.includes(nodeId)
                ? prevChecked.filter((id) => id !== nodeId)
                : [...prevChecked, nodeId]
        );
    };

    const handleCheckAll = (department) => () => {
        const subDepartmentIds = department.subDepartments.map((subDep) => subDep.id);
        setChecked((prevChecked) =>
            prevChecked.includes(department.id)
                ? prevChecked.filter((id) => id !== department.id)
                : [...prevChecked, department.id, ...subDepartmentIds]
        );
    };

    const isSubDepartmentsChecked = (subDepartments) =>
        subDepartments.every((subDep) => checked.includes(subDep.id));

    const isDepartmentChecked = (department) =>
        department.subDepartments.length > 0 &&
        isSubDepartmentsChecked(department.subDepartments);

    const renderTree = (department) => (
        <TreeItem
            key={department.id}
            nodeId={department.id.toString()}
            label={
                <div>
                    <Checkbox
                        checked={isDepartmentChecked(department)}
                        onChange={handleCheckAll(department)}
                        indeterminate={
                            department.subDepartments.length > 0 &&
                            !isSubDepartmentsChecked(department.subDepartments)
                        }
                    />
                    {department.name}
                </div>
            }
        >
            {department.subDepartments.map((subDep) => (
                <TreeItem
                    key={subDep.id}
                    nodeId={subDep.id.toString()}
                    label={
                        <div>
                            <Checkbox
                                checked={checked.includes(subDep.id)}
                                onChange={handleCheck(subDep.id)}
                            />
                            {subDep.name}
                        </div>
                    }
                />
            ))}
        </TreeItem>
    );

    return (
        <Grid style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Grid item xs={10} sm={10} md={10}>
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    expanded={expanded}
                    onNodeToggle={(_, nodeIds) => handleToggle(nodeIds)}
                >
                    {departmentsData.map((department) => renderTree(department))}
                </TreeView>
            </Grid>
        </Grid>
    );
};

export default DepartmentTree;






