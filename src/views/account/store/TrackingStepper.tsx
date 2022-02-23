import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { Step, StepLabel, Stepper } from '@material-ui/core';
import { withStyles, StepConnector, makeStyles } from '@material-ui/core';
import { getActiveStep, getTimelineDate } from '@taftaf/utils/tracker';
import { Recieved } from '@taftaf/components';
import CheckMark from '@material-ui/icons/CheckCircle';
import Truck from '@material-ui/icons/LocalShipping';
import { Parcel } from '@taftaf/graphql';
import { useTranslator } from '@taftaf/hooks/use-translator';

type TrackingStepperProps = {
    parcel: Parcel;
};

export const TrackingStepper = (props: TrackingStepperProps): JSX.Element => {
    const { status, updatedAt, createdAt } = props.parcel;

    const activeStep = getActiveStep(status);

    const { translate } = useTranslator();

    const { locale } = useRouter();

    const deliveryColor = 'linear-gradient( 136deg, #0F9D58 0%,#0F9D58 50%, #0F9D58 100%)';

    const defaultActiveColor = 'linear-gradient( 136deg, #0467CA 0%, #0467CA 50%, #0467CA 100%)';

    const ColorlibConnector = withStyles({
        alternativeLabel: {
            top: 22,
        },
        active: {
            '& $line': {
                backgroundImage: defaultActiveColor,
            },
        },
        completed: {
            '& $line': {
                backgroundImage: `${activeStep === 3 ? deliveryColor : defaultActiveColor}`,
            },
        },
        line: {
            height: 10,
            border: 0,
            transition: 'all 1s ease-in',
            backgroundColor: '#eaeaf0',
            borderRadius: 1,
        },
    })(StepConnector);

    const useColorlibStepIconStyles = makeStyles({
        root: {
            backgroundColor: '#ccc',
            zIndex: 1,
            color: '#fff',
            width: 50,
            height: 50,
            display: 'flex',
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        active: {
            backgroundImage: defaultActiveColor,
            boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        },
        completed: {
            backgroundImage: `${activeStep === 3 ? deliveryColor : defaultActiveColor}`,
        },
    });

    function ColorlibStepIcon(props: { icon: 1 | 2 | 3; active: string; completed: boolean }) {
        const classes = useColorlibStepIconStyles();
        const { active, completed } = props;

        const icons: Record<string, any> = {
            1: <Recieved />,
            2: <Truck />,
            3: <CheckMark />,
        };

        return (
            <div
                className={clsx(classes.root, {
                    [classes.active]: active,
                    [classes.completed]: completed,
                })}
            >
                {icons[String(props.icon)]}
            </div>
        );
    }

    function getSteps(activeStep: number) {
        return [
            `${
                activeStep === 0 || activeStep === 1 || activeStep === 3
                    ? getTimelineDate(createdAt, locale)
                    : translate('tracking_step_subtitle_pending')
            } `,
            `${
                activeStep === 1
                    ? getTimelineDate(updatedAt, locale)
                    : activeStep === 3
                    ? ''
                    : translate('tracking_step_subtitle_pending')
            }`,
            `${
                activeStep === 3
                    ? getTimelineDate(updatedAt, locale)
                    : translate('tracking_step_subtitle_pending')
            }`,
        ];
    }

    const steps = getSteps(activeStep);

    return (
        <Stepper
            style={{
                width: '100%',
                paddingLeft: 0,
                paddingRight: 0,
                zIndex: -100,
            }}
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
        >
            {steps.map((label, index) => (
                <Step key={index}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                        <strong>{index === 0 ? translate('tracking_step1') : ''}</strong>{' '}
                        <strong>
                            {index === 1
                                ? activeStep === 1
                                    ? translate('tracking_step2_title_success')
                                    : activeStep === 3
                                    ? ''
                                    : translate('tracking_step2_title_pending')
                                : ''}
                        </strong>
                        <strong>
                            {index === 2
                                ? activeStep === 3
                                    ? translate('tracking_step3_title_success')
                                    : translate('tracking_step3_title_pending')
                                : ''}
                        </strong>
                        <br />
                        {label}
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    );
};
