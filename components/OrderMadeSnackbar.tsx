import {
  useState,
  forwardRef,
  useCallback,
  ReactElement,
  JSXElementConstructor,
} from "react";
import { useSnackbar, SnackbarContent, CustomContentProps } from "notistack";
import Collapse from "@mui/material/Collapse";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { MdClose, MdExpandMore, MdDownload } from "react-icons/md";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";

interface OrderMadeSnackbarProps extends CustomContentProps {
  allowDownload?: boolean;
  pdf: ReactElement<
    ReactPDF.DocumentProps,
    string | JSXElementConstructor<any>
  >;
}

const OrderMadeSnackbar = forwardRef<HTMLDivElement, OrderMadeSnackbarProps>(
  ({ id, pdf, ...props }, ref) => {
    const { closeSnackbar } = useSnackbar();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = useCallback(() => {
      setExpanded((oldExpanded) => !oldExpanded);
    }, []);

    const handleDismiss = useCallback(() => {
      closeSnackbar(id);
    }, [id, closeSnackbar]);

    return (
      <SnackbarContent ref={ref} className="w-96">
        <Card className="w-full" style={{ backgroundColor: "#43a047" }}>
          <CardActions
            style={{
              padding: "8px 8px 8px 16px",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" className="text-white">
              {props.message}
            </Typography>
            <div className="ml-auto">
              <IconButton
                aria-label="Show more"
                size="small"
                style={{
                  padding: "8px 8px",
                  transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                  color: "#000",
                  transition: "all .2s",
                }}
                onClick={handleExpandClick}
              >
                <MdExpandMore color="#ffffff" />
              </IconButton>
              <IconButton
                size="small"
                style={{
                  padding: "8px 8px",
                  transform: "rotate(0deg)",
                  color: "#000",
                  transition: "all .2s",
                }}
                onClick={handleDismiss}
              >
                <MdClose color="#ffffff" />
              </IconButton>
            </div>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Paper className="bg-white p-4">
              <Typography
                gutterBottom
                variant="caption"
                style={{ color: "#000", display: "block" }}
              >
                Receipt ready
              </Typography>
              <Button
                size="small"
                color="primary"
                className="p-0 normal-case space-x-1"
              >
                <MdDownload size="18px" />
                <PDFDownloadLink document={pdf} fileName="receipt.pdf">
                  {({ blob, url, loading, error }) => {
                    return loading
                      ? "Loading receipt..."
                      : "Download sekarang!";
                  }}
                </PDFDownloadLink>
              </Button>
            </Paper>
          </Collapse>
        </Card>
      </SnackbarContent>
    );
  }
);

OrderMadeSnackbar.displayName = "OrderMadeSnackbar";

export default OrderMadeSnackbar;
