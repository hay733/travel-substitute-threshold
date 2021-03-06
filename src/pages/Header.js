import '../css/tst.css'
import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

/**
 * sets the css styles for the different components
 */
const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#1E2124",
    paddingRight: "60px",
    paddingLeft: "60px",
    paddingBottom: "12px",
    paddingTop: "12px",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 900,
    color: "#FFFFEE",
    fontSize: "25px",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    fontSize: "20px",
    textTransform: "lowercase",
    marginLeft: "25px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

/**
 * sets the label and link for each navbar "button"
 */
const headersData = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "quiz",
    href: "/quiz",
  },
  {
    label: "about",
    href: "/about",
  },
  {
    label: "descriptions",
    href: "/descriptions",
  },
];

/**
 * 
 * @returns The navbar w title and buttons
 */
export default function Header() {
  const { header, logo, menuButton, toolbar } = useStyles();
                     
  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {trtLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const trtLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      travel substitution threshold
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton
          }}>
          {label}
        </Button>
      );
    });
  };
                         
  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}