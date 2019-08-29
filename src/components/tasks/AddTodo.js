import React, { memo } from "react";
import { TextField, Paper, Button, Grid, MenuItem } from "@material-ui/core";
import { useInputValue } from '../Hooks/CustomHooks';
import { connectableObservableDescriptor } from "../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/rxjs/internal/observable/ConnectableObservable";

const AddTodo = memo(props => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let { inputValue } = useInputValue();
  console.log(inputValue);
  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            label="Task"
            placeholder="Add Todo here"
            value={inputValue.task}
            onChange={props.onInputChange}
            onKeyPress={props.onInputKeyPress}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Category"
            placeholder="Category"
            value={inputValue.title}
            onChange={props.onInputChange}
            onKeyPress={props.onInputKeyPress}
            margin="normal"
            fullWidth
          />
          <TextField
            select
            label="Due Day"
            value={inputValue.setDate}
            onChange={props.onInputChange} 
            margin="normal"
            fullWidth
          >
            {days.map(day => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Notes (optional)"
            placeholder="Notes"
            value={inputValue.title}
            onChange={props.onInputChange}
            onKeyPress={props.onInputKeyPress}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            fullWidth
            color="secondary"
            variant="outlined"
            onClick={props.onButtonClick}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
});

export default AddTodo;
