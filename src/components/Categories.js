import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { observer } from "mobx-react-lite";

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: "10px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  }
}));

function Categories({ store }) {
  const classes = useStyles();
  return (
    <div className="game">
      {store.seasons.map((season, i) => (
        <Card className={classes.card}>
          <CardHeader
            title={season.friendlyName}
            subheader={season.friendlyName}
          />

          <CardContent>hej</CardContent>
        </Card>
      ))}
    </div>
  );
}

export default observer(Categories);
