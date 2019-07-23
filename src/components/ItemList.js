import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { red } from "@material-ui/core/colors";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { Image, Video } from "cloudinary-react";
import VisibilitySensor from "react-visibility-sensor";
import StarIcon from "@material-ui/icons/Star";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ProfileReadOnly from "./ProfileReadOnly";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    //maxWidth: 345,
    marginTop: "10px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

function onChange(item, isVisible) {
  item.setVisibility(isVisible);
  const videoElm = document.getElementById(item.publicId);
  if (videoElm) {
    if (isVisible) {
      videoElm.play();
    } else {
      videoElm.pause();
    }
  } else {
    console.log("not found");
  }
}

function onChangeRefresh(store, isVisible) {
  if (isVisible) {
    store.refresh();
  }
}

function ItemList({ store }) {
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      store.items
        .filter(x => x.isVisible)
        .map(items => {
          onChange(items, true);
        });
    }, 1);
  }, []);

  function ItemStatusAction({ item }) {
    if (item.isDone) {
      const style = { color: "green" };
      if (item.game.category === "MEDIUM") {
        style.color = "orange";
      }
      if (item.game.category === "HARD") {
        style.color = "red";
      }

      return <StarIcon style={style} />;
    }
    if (item.isRejected) {
      return <ThumbDownIcon />;
    }

    return <AccountCircleIcon />;
  }

  function goFullScreen(item) {
    document.getElementById(item.publicId).webkitEnterFullscreen();
  }

  return (
    <div className="item-container">
      <div className="item-list">
        <VisibilitySensor
          offset={{ top: 80 }}
          onChange={isVisible => onChangeRefresh(store, isVisible)}
        >
          <div className="refresh-div">dra för att ladda</div>
        </VisibilitySensor>

        {!store.selectedProfile &&
          store.items.map((item, i) => (
            <VisibilitySensor
              key={item.publicId}
              onChange={isVisible => onChange(item, isVisible)}
            >
              <Card key={item.publicId} className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      <Image
                        cloudName="deolievif"
                        publicId={item.user.profileImage}
                        width="100%"
                        height="100%"
                      />
                    </Avatar>
                  }
                  action={<ItemStatusAction item={item} />}
                  title={
                    <div onClick={() => store.selectProfile(item.user)}>
                      {item.user.name}
                    </div>
                  }
                  subheader={item.game.name}
                />
                <CardContent>
                  {/* <video
                    onClick={() => goFullScreen(item)}
                    id={item.publicId}
                    autoPlay
                    loop
                    playsInline
                    preload="none"
                    muted
                    width="100%"
                    height="100%"
                  >
                    <source
                      src="https://www.dropbox.com/s/nyq71uinj8q3f2t/czh2lmab4bkqobxlkykg.mov?raw=1"
                      type="video/mp4"
                    />
                  </video> */}
                  <Video
                    onClick={() => goFullScreen(item)}
                    id={item.publicId}
                    cloudName="deolievif"
                    publicId={item.publicId}
                    width="100%"
                    height="100%"
                    loop
                    muted
                    playsInline
                    preload="none"
                    poster={item.poster}
                  />
                </CardContent>

                <CardActions>
                  <Typography variant="overline" style={{ color: "gray" }}>
                    {item.displayText}
                  </Typography>
                </CardActions>
              </Card>
            </VisibilitySensor>
          ))}
        {store.selectedProfile && <ProfileReadOnly store={store} />}
      </div>
    </div>
  );
}

export default observer(ItemList);
