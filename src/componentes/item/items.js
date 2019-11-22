import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import { ItemsService, items } from '../../services/itemsService';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

export class ItemsComponent extends Component {

  itemscompleto
  constructor(props) {
    super(props)
    this.state = { items: [] }
    // this.itemscompleto = ItemsService.getAllItems()
  }

  actualizarItems = async () => {
    try {
      //   const items = await ItemsService.getAllItems()
      //   this.setState({
      //     items: items
      //    })
    } catch (error) {
      this.errorHandler(error)
    }
  }

  errorHandler(errorMessage) {
    throw errorMessage
  }

  async componentDidMount() {
    await this.actualizarItems()
  }




  render() {

    return (
      <Paper >
        <br />

        <Table>

          <TableHead>
            <TableRow>
              <TableCell>Nombe</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Precio  </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {/* {  this.state.items.map((item)=> (
            <TableRow key={item.nombre}>
              <TableCell component="th" scope="row"> {item.nombre}
              </TableCell>
              <TableCell align="right">{item.peso}</TableCell>

              <TableCell align="right">{item.precio}</TableCell>
            </TableRow>
          ))} */}
            {itemsCompleto.map(item => (
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  {item.nombre}
                </TableCell>
                <TableCell align="right">{item.alcance}</TableCell>
                <TableCell align="right">{item.precio}</TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>
      </Paper>


    )
  }

}


export default ItemsComponent

function createItem(id, nombre, alcance, danio, resistencia, sobrenatural, precio) {
  return { id, nombre, alcance, danio, resistencia, sobrenatural, precio };
}

const itemsCompleto = [
  createItem('1', 'Cota del malla', 5.0, 5.0, 5.0, 5.0, false, 2.0),
  createItem('2', 'Collar Divino', 5.0, 5.0, 5.0, 5.0, false, 2.0),
  createItem('3', 'Espada del olimpo', 5.0, 5.0, 5.0, 5.0, false, 2.0),
  createItem('4', 'Martillo de Thor', 5.0, 5.0, 5.0, 5.0, false, 2.0),
];