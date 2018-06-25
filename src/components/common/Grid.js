
import React ,{Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class  Grid extends Component {
    render (){
        return(
            <Paper >
                <Table >
                    <TableHead>
                        <TableRow>
                            {this.props.header.map(colName =>{
                                return( <TableCell>{colName}</TableCell> )

                            })}

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.dataset.map(row => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell >{row.id}</TableCell>
                                    <TableCell>{row.text}</TableCell>
                                    <TableCell>{row.title}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>

            </Paper>
        )
    }
};
export default Grid
