import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Avatar from '../../../../components/Avatar';

const PendingInvitationListItem = ({
    username,
    mail,
    id,
    acceptFriendInvitation = () => {},
    rejectFriendInvitation = () => {},
}) => {
    const [buttonsDisabled, setButtonsDisabled] = useState(false);

    const handleAcceptInvitation = () => {
        acceptFriendInvitation({ id });
        setButtonsDisabled(true);
    };

    const handleRegectInvitation = () => {
        rejectFriendInvitation({ id });
        setButtonsDisabled(true);
    };
    return (
        <Tooltip title={mail}>
            <div style={{ width: '100%' }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '42px',
                        marginTop: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Avatar user={username} />
                    <Typography
                        variant="subtitle1"
                        align="left"
                        style={{
                            marginLeft: '7px',
                            fontWeight: 700,
                            color: '#8e9297',
                            flexGrow: 1,
                        }}
                    >
                        {username}
                    </Typography>
                </Box>
            </div>
        </Tooltip>
    );
};

export default PendingInvitationListItem;
