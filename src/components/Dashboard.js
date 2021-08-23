import React, { useContext, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Chip from "@material-ui/core/Chip";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Context } from "../store/Store";
const useStyles = makeStyles((theme) => ({
  root: {},
  flex: {
    display: "flex",
    alignItems: "center",
  },
  topicsWindow: {
    background: "#1c1e21",
    color: "white",
    width: "20%",
    height: "100vh",
    borderRight: "1px solid grey",
  },
  chatWindow: {
    paddingTop: "5em",
    width: "100%",
    height: "100vh",
    padding: "20px",
    overflow: "auto",
  },
  chatBox: {
    width: "85%",
  },
  button: {
    width: "5%",
  },
}));

function Dashboard() {
  const classes = useStyles();

  const { allChats, sendChatAction, user } = useContext(Context);
  const topics = Object.keys(allChats);
  const [textValue, setTextValue] = useState("");
  const [activeTopic, setActiveTopic] = useState(topics[0]);
  return (
    <Paper className={classes.root}>
      <div className={classes.flex}>
        <div className={classes.topicsWindow}>
          <List>
            {topics.map((topic) => (
              <ListItem
                onClick={(e) => setActiveTopic(e.target.innerText)}
                key={topic}
                button
              >
                <ListItemText primary={topic} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.chatWindow}>
          {allChats[activeTopic]?.map((chat, index) => (
            <div key={index} className={classes.flex}>
              <Chip label={chat.from} className={classes.chip} />
              <Typography variant="body1" gutterBottom>
                {chat.msg}
              </Typography>
            </div>
          ))}
          <div style={{ position: "fixed", bottom: "20px", width: "90%" }}>
            <TextField
              label="Send a message"
              className={classes.chatBox}
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            />

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => {
                sendChatAction({
                  from: user,
                  msg: textValue,
                  topic: activeTopic,
                });
                setTextValue("");
              }}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default Dashboard;
