import React, { useState } from 'react';
import ModalComp from '../ModalComp';
import { Button, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import BlourImgPlaceHolder from '../BlourImgPlaceHolder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function MovieInfoModal({ largeimage, title, runtime, rating, synopsis, image }) {
    const [open, setOpen] = useState(false);

    const makeTrigerBtn = ({ onClick }) => {
        return (
            <Button
                fullWidth
                color='inherit'
                variant="outlined"
                onClick={onClick}
                endIcon={<ArrowForwardIcon />}
            >
                <span className='pr-4'>Read more</span>
            </Button>
        )
    }

    return (
        <ModalComp
            fullWidth
            makeTriggerBtn={makeTrigerBtn}
            openController={{ open, setOpen }}
        >
            <Grid container spacing={2} className='lg:py-10'>
                <Grid item xs={12} sm={6} >
                    <div className='flex justify-center items-center'>
                        <BlourImgPlaceHolder smallImgUrl={image}>
                            <img
                                src={largeimage}
                                alt={title}
                                className='sm:w-[284px] sm:h-[398px] w-[166px] h-[233px]'
                                loading='lazy'
                            />
                        </BlourImgPlaceHolder>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <div className="flex flex-col justify-between h-full">
                        <div className='pb-5'>
                            <div className="lg:text-4xl text-2xl font-bold mb-4">{title}</div>
                            <p>{runtime.replace(/(\d+h)(\d+m)/, '$1 $2')}</p> {/* add space between h to m */}
                            <p className="text-gray-700 text-base mb-2 flex items-center pt-2">
                                <StarIcon className="mr-2 text-[#f5c518]" /> {rating || 'Unknown'}/10
                            </p>
                            <div dangerouslySetInnerHTML={{ __html: synopsis }} />
                        </div>
                        <Button
                            fullWidth
                            color='inherit'
                            variant="outlined"
                            onClick={() => setOpen(false)}
                            startIcon={<ArrowBackIcon />}
                            className="mt-auto"
                        >
                            <span className='pl-8'>Back to list</span>
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </ModalComp>
    );
}

export default MovieInfoModal;