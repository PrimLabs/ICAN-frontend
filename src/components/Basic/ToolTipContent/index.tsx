import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {Zoom} from "@mui/material";
import {memo, useEffect} from "react";
import "./index.css"

interface Props {
    children: JSX.Element,
    content: JSX.Element,
    handleOpen?:Function,
    handleClose?:Function,
    visible?:boolean|undefined,
    placement: string
    
}

export const TooltipContent =memo(({children, content,handleOpen,handleClose,visible,placement}: Props) => {
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
        handleClose&&handleClose()
    };

    const handleTooltipOpen = () => {
        setOpen(true);
        handleOpen&&handleOpen();

    };
    useEffect(()=>{
        if (visible!==undefined){
            setOpen(visible);
        }
    },[visible])
    return (
        <div>
            <Grid item>
                <ClickAwayListener onClickAway={handleTooltipClose}>
                    <div>
                        <Tooltip
                            PopperProps={{
                                disablePortal: true,
                            }}
                            classes={{popper: 'TooltipsTransaction'}}
                            onClose={handleTooltipClose}
                            open={open}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title={content}
                            TransitionComponent={Zoom}
                            
                            arrow
                        >
                            <div onClick={handleTooltipOpen}>{children}</div>
                        </Tooltip>
                    </div>
                </ClickAwayListener>
            </Grid>
        </div>
    );
})