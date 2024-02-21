import './investors.css';
import { Helmet } from 'react-helmet';
import { Footer, Header1, Header2 } from '../../assets/headers/header';
import { useHeader, usePopup } from '../../hooks';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import { useRef } from 'react';
import useScrollSnap from 'react-use-scroll-snap';

const Investors = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 300, delay: 0 });

  const header2 = useHeader();
  const { handlePopup2, popup, setPopup } = usePopup();

  return (
    <>
      <Helmet>
        <title>Investors | Roodi</title>
      </Helmet>

      {header2 && <Header1 header2={header2} handlePopup2={handlePopup2} />}

      <div ref={scrollRef}>
        {!header2 && <Header2 header2={header2} handlePopup2={handlePopup2} />}

        <div className='bg-[#E4D9FE] h-screen w-full flex items-center justify-center'>
          <h2 className='w-[353px] h-[168px] text-[70px] leading-[84px] font-[800]'>
            It’s disruptive
            <span className='text-[#FFA100] font-[1000] text-[100px]'>.</span>
          </h2>
        </div>

        <div className='bg-[#351D6B] h-screen w-full flex items-center justify-center'>
          <h2 className='text-[#E4D9FE] h-[168px] w-[353px] text-[70px] leading-[84px] font-[800]'>
            It’s turbulent
            <span className='text-[#FFA100] font-[1000] text-[100px]'>.</span>
          </h2>
        </div>

        <div className='bg-[#E4D9FE] h-screen w-full flex items-center justify-center'>
          <h2 className='h-[252px] w-[353px] text-[70px] leading-[84px] font-[800]'>
            And <span className='text-[#FFA100]'>we’re</span> in for the long
            ride
            <span className='text-[#FFA100] font-[1000] text-[100px]'>.</span>
          </h2>
        </div>

        <div className='bg-[#351D6B] h-screen w-full flex flex-col items-center justify-between text-[#E4D9FE] py-[253px]'>
          <h2 className='h-fit w-[353px] text-[60px] leading-[84px] font-[800] text-center'>
            Join us on our journey
          </h2>

          <p className='text-center w-[353px] h-[34px] text-[25px] leading-[34.1px]'>
            Become an investor
          </p>

          <button
            className='text-center bg-[#FFA100] text-[#351D6B] w-[353px] h-[48px] text-[20px] leading-[27.28px] font-[800]'
            onClick={handlePopup2}
          >
            REGISTER YOUR INTEREST
          </button>

          <a href='' className='text-center'>
            Learn about us <ArrowForwardIcon />
          </a>
        </div>

        <Footer />
      </div>

      {popup.type2 && (
        <div
          className='w-full h-full bg-[#341d6be8] fixed top-0 left-0 z-20 flex items-center justify-center'
          onClick={() => setPopup({ ...popup, type2: !popup.type2 })}
        >
          <div
            className='max-w-[430px] max-h-[932px] w-[312.5px] min-h-[552.4px] lg:min-h-[502.4px] border-[3px] rounded-[10px] border-[#351D6B40] bg-[#E4D9FE] transform scale-125 lg:scale-100'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex items-center flex-row-reverse p-[10px]'>
              <CloseIcon
                className='text-[#FF0000] !text-[20px]'
                onClick={() => setPopup({ ...popup, type2: !popup.type2 })}
              />
            </div>

            <div className='flex items-center justify-between max-w-[100%] mx-[16px]'>
              <h2 className='w-[133.6px] h-[68.4px] text-[28.8px] leading-[39.28px] font-[700]'>
                Join the waitlist
                <span className='text-[#FFA100] font-[1500] text-[45px]'>
                  &nbsp;_
                </span>
              </h2>
              <p className='flex flex-col items-end justify-end w-[44.8px] h-[70.4px]'>
                <span className='text-[13px] font-[900] leading-[14.184px]'>
                  22
                </span>

                <span className='h-[25.6px] font-[700] text-[9.6px] leading-[16.37px] text-end'>
                  schools on the list
                </span>
              </p>
            </div>

            <form
              className='mt-[28px] flex flex-col items-center justify-between mx-[16px]'
              onSubmit={(e) => e.preventDefault()}
            >
              <div className='input__box'>
                <label htmlFor='first-name'>Your first name *</label>

                <input type='text' id='first-name' placeholder='e.g. Jane' />
              </div>

              <div className='input__box'>
                <label htmlFor='first-name'>Your last name</label>

                <input type='text' id='first-name' placeholder='e.g. Doe' />
              </div>

              <div className='input__box'>
                <label htmlFor='first-name'>
                  What’s the name of your school? *
                </label>

                <input
                  type='text'
                  id='first-name'
                  placeholder='e.g. Mercyland International School'
                />
              </div>

              <div className='input__box'>
                <label htmlFor='first-name'>Your email address *</label>

                <input
                  type='email'
                  id='first-name'
                  placeholder='e.g. janedoe@school.com'
                />
              </div>

              <div className='input__box'>
                <label htmlFor='first-name'>Your phone number</label>

                <input
                  type='tel'
                  id='first-name'
                  placeholder='e.g. 08102345678'
                />
              </div>

              <button className='h-[38.4px] my-[10px]'>Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Investors;
