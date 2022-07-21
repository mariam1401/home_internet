import React, {useEffect, useState} from "react";
import {Oval} from "react-loader-spinner";
import {useDispatch, useSelector} from "react-redux";
import {storeNumberRequest} from "../redux/action/storeNumberAction";
import useMediaQuery from 'use-mediaquery'
import styles from './home_internet.module.css'
import backImage from '../assets/images/Asset 2 (1).svg'
import searchIcon from '../assets/images/Group (2).png'
import shadowIcon from '../assets/images/Vector.svg'
import rectangle from '../assets/images/Rectangle.png'
import arrowIcon from '../assets/images/Asset 5.svg'
import errorIcon from '../assets/images/Group (1).png'
import starts from '../assets/images/Group.svg'
import box from '../assets/images/Rectangle (1).svg'

const Home_internet = ()=>{
    const screenSize = useMediaQuery('(max-width:600px)')
    const [success,setSuccess]=useState(false)
    const [error,setError]=useState(false)
    const [initial,setInitial]=useState(true)
    const [loading,setLoading]=useState(false)
    const [click,setClick]=useState(false)
    const [textBtn,setTextBtn]=useState('CHECK AVAILABILITY')
    const [title,setTitle]=useState()
    const [code,setCode]=useState()
    const dispatch = useDispatch()
    const {data,status}= useSelector((state)=>state.storeNumber)

    const handleBtnClick = ()=>{
        if(initial) {
            setClick(true)
            dispatch(storeNumberRequest(+code))
        }
    }
    const handleStoreNumber = (event)=>{
        setCode(event.target.value)
    }

    useEffect(()=>{
        if(click){
            if(status === 'loading'){
                setLoading(true)
            }
            else{
                setLoading(false)
            }
            if(data.data){
                if((data.data.isEligible === true) && status === 'success' ){
                    setSuccess(true)
                    setError(false)
                    setInitial(false)
                    setTextBtn('LEARN MORE')
                    setTitle('Congratulations!')
                }
                else if((data.data.isEligible === false) && status === 'success') {
                    setError(true)
                    setSuccess(false)
                    setInitial(false)
                    setTextBtn('LEARN MORE')
                    setTitle("We're sorry.")
                }
            }
        }
    },[click,data,status])

    return(
        <>
        {screenSize &&
        <div className={styles.main_container}>
            <div className={styles.container}>

                {!initial &&
                <div className={styles.success_div}>
                    {success &&
                    <div className={styles.star_div}>
                        <img src={starts} alt='' className={styles.stars}/>
                    </div>
                    }
                    <div className={styles.box_container}>
                       <img src={backImage} className={styles.backImage2} alt=''/>
                        <div className={styles.div2}>
                            <div> </div>
                            <div className={styles.div3}>
                                {success &&
                                <img src={shadowIcon} className={styles.shadow} alt=''/>
                                }
                                <img src={box}  className={styles.box} alt=''/>
                                {error &&
                                    <img src={errorIcon} alt='' className={styles.errorIcon}/>
                                }
                            </div>
                        </div>
                    </div>
                 </div>
                }
                {initial &&
                <img src={backImage} className={styles.backImage} alt=''/>
                }
                {initial &&
                <div className={styles.rectangle_div}>
                    <div className={styles.header}>
                        <span className={styles.header_txt}>Unlimited</span>
                        <span className={styles.header_txt}
                              style={{color: 'white', fontWeight: 'bold'}}>Home Internet</span>
                        <span className={styles.only_text}>Only
                            <div className={styles.txt}>
                              <span className={styles.dollar}>$</span>
                              <span>45</span>
                              <span className={styles.month}>/mo.</span>
                            </div>
                        </span>
                    </div>
                    <img src={rectangle} className={styles.rectangle} alt=''/>
                </div>
                }
            </div>
            <div className={styles.text_container}>
                {initial ? <div className={styles.line}> </div> : <span className={styles.title}>{title}</span>}

                <div className={styles.text}>
                    {loading &&
                    <Oval color='#BEE81E' secondaryColor='#505050' className={styles.oval}/>
                    }
                    {(!loading && initial) && 'Please enter your store number to see if your location qualifies for Straight Talk Home Internet'}
                    {success && 'Your store will be receiving the Home Internet Router by Straight Talk'}
                    {error && 'Home Internet by Straight Talk is currently not available in your store.'}
                </div>
                {!loading &&
                <div className={styles.btn_div}>
                    <div className={styles.div} style={initial ? {justifyContent:'space-between'} :
                        success ? {justifyContent:'flex-end'} : {justifyContent:'space-between',height:'16vh'}}>

                        {initial &&
                        <div className={styles.input_div}>
                            <img src={searchIcon} alt='' className={styles.search_icon}/>
                            <input
                                className={styles.input}
                                type='text'
                                placeholder='SEARCH'
                                value={code}
                                onChange={handleStoreNumber}
                            />
                        </div>
                        }
                        {error &&
                        <span className={styles.text}>
                            Please note that we are working on expanding coverage for additional stores.
                        </span>
                        }
                    <button className={styles.btn} onClick={handleBtnClick}>
                        {initial ?
                            <span className={styles.btn_text}>{textBtn}</span>
                            :
                            <a className={styles.btn_text}
                               href='https://www.walmart.com/cp/straight-talk-wireless/1045119'>{textBtn}</a>
                        }
                        <img src={arrowIcon} alt='' className={styles.arrow}/>
                    </button>
                   </div>
                </div>}
            </div>
        </div>
    }
  </>
)}
export  default Home_internet