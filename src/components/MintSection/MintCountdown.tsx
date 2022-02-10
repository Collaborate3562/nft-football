import { Paper } from "@material-ui/core";
import Countdown from "react-countdown";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      padding: theme.spacing(0),
      "& > *": {
        margin: theme.spacing(1),
        marginRight: 0,
        width: 64,
        height: 64,
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        background: "#384457",
        color: "white",
        borderRadius: 5,
        fontSize: 14,
        "@media(max-width: 600px)": {
          width: 48,
          height: 48,
          fontSize: 12,
        },
      },
    },
    done: {
      display: "flex",
      margin: theme.spacing(1),
      marginRight: 0,
      padding: 5,
      flexDirection: "column",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      background: "#384457",
      color: "white",
      borderRadius: 10,
      fontWeight: "bold",
      fontSize: 18,
    },
    item: {
      fontWeight: "bold",
      fontSize: 24,
      "@media(max-width: 600px)": {
        fontSize: 16,
      },
    },
  })
);

interface MintCountdownProps {
  date: Date | undefined;
  style?: React.CSSProperties;
  status?: string;
  onComplete?: () => void;
}

interface MintCountdownRender {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

export const MintCountdown: React.FC<MintCountdownProps> = ({
  date,
  status,
  style,
  onComplete,
}) => {
  const classes = useStyles();
  const renderCountdown = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: MintCountdownRender) => {
    if (completed) {
      return status ? <span className={classes.done}>{status}</span> : null;
    } else {
      return (
        <div className={classes.root} style={style}>
          <Paper elevation={0}>
            <span className={classes.item}>
              {days < 10 ? `0${days}` : days}
            </span>
            <span>days</span>
          </Paper>
          <Paper elevation={0}>
            <span className={classes.item}>
              {hours < 10 ? `0${hours}` : hours}
            </span>
            <span>hours</span>
          </Paper>
          <Paper elevation={0}>
            <span className={classes.item}>
              {minutes < 10 ? `0${minutes}` : minutes}
            </span>
            <span>minutes</span>
          </Paper>
          {/* <Paper elevation={0}>
            <span className={classes.item}>
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
            <span>secs</span>
          </Paper> */}
        </div>
      );
    }
  };

  if (date) {
    return (
      <Countdown
        date={date}
        onComplete={onComplete}
        renderer={renderCountdown}
      />
    );
  } else {
    return null;
  }
};
