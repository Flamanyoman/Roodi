import './home.css';
import { Helmet } from 'react-helmet';
import placeholder from '../../assets/images/phoneplaceholder.png';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CloseIcon from '@mui/icons-material/Close';
import { Header1, Header2, Footer } from '../../assets/headers/header';
import { useHeader, usePopup } from '../../hooks';

const Home = () => {
  const header2 = useHeader();
  const { handlePopup, handlePopup2, popup, setPopup } = usePopup();

  return (
    <>
      {/* all meta information regarding this page  */}
      <Helmet>
        <title>Home | Roodi</title>
      </Helmet>

      {header2 && <Header1 header2={header2} handlePopup2={handlePopup2} />}

      <div className='relative'>
        {/* mobile svg  */}

        {!header2 && <Header2 header2={header2} handlePopup2={handlePopup2} />}
        <svg
          className='absolute top-[54px] z-[-1] w-full lg:hidden'
          width='100%'
          height='860'
          viewBox='0 0 393 795'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='-19.6906'
            y='0.160034'
            width='714.491'
            height='559.709'
            transform='rotate(23 -19.6906 0.160034)'
            fill='#E4D9FE'
          />
        </svg>

        {/* desktop svg */}
        <svg
          className='lg:absolute lg:top-[96.58px] lg:z-[-1] lg:w-full lg:block hidden'
          width='1590.03'
          height='1100'
          viewBox='0 0 1280 1072'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='-13.1287'
            y='0.575592'
            width='1590.03'
            height='618.699'
            transform='rotate(17.6012 -13.1287 0.575592)'
            fill='#E4D9FE'
          />
        </svg>

        <div className=' min-h-[228px] mx-[20px] mt-[92px] lg:mx-[100px]'>
          <h1 className='font-[700] text-[42px] leading-[57.29px] lg:top-[211px] lg:w-[544px] lg:h-[356px] lg:text-[65px] lg:leading-[88.66px]'>
            Accelerate growth with a happier teaching experience.
          </h1>
        </div>

        <div className=' min-h-[125px] mx-[20px] mt-[34px] lg:mx-[100px]'>
          <p className='leading-[24.55px] text-[18px] lg:w-[636px] lg:h-[152px] lg:font-[300] lg:text-[28px] lg:leading-[38.19px]'>
            Roodi enables you to save 500+ hours spent on admin duties, empowers
            your teachers with simplified classroom management, and allows you
            to focus on growing your school population.
          </p>
        </div>

        <div className=' mx-[20px] mt-[60px] lg:mx-[100px]'>
          <button className='lg:w-[353px] lg:h-[48px]' onClick={handlePopup2}>
            JOIN THE WAITLIST
          </button>
        </div>
      </div>

      <div className=' min-h-[582px] mx-[20px] mt-[43px] flex items-center justify-center lg:w-[297.94px] lg:absolute lg:top-[219px] lg:left-[852px]'>
        <img className='w-[289px] lg:w-full' src={placeholder} alt='Roodi' />
      </div>

      <div className=' min-h-[1093px] mt-[17px]'>
        <div className=' mx-[20px] lg:mx-0'>
          <section className='one lg:mt-[223px] lg:relative'>
            <h2 className='font-[700] text-[36px] leading-[49.1px] mt-[26px] min-h-[147px] lg:mx-[100px] lg:w-[818px] lg:h-[164px] lg:text-[60px] lg:leading-[81.84px]'>
              Endless benefits, engineered precisely for you.
            </h2>

            <p className='leading-[24.55px] text-[18px] mt-[20px] min-h-[50px] lg:mx-[100px] lg:mt-[30px] lg:w-[818px] lg:h-[76px] lg:text-[28px] lg:leading-[38.19px]'>
              Discover how Roodi transforms your school into a paragon of modern
              education.
            </p>

            {/* one */}
            <div className='relative mt-[10.85px] flex lg:mx-[100px] lg:mt-[100px]'>
              <b className='absolute top-[30px]'>1</b>
              <h3 className='font-[600] text-[26px] leading-[35.46px] min-h-[105px] ml-[30px] mt-[75px] lg:text-[45px] lg:w-[562px] lg:h-[183px] lg:leading-[61.38px]'>
                Streamline attendance and detect health risk early with Roll
                Call™
              </h3>
            </div>

            <p className='leading-[21.82px] text-[16px] ml-[30px] mt-[20px] min-h-[88px] lg:mx-[130px] lg:mt-[40px] lg:text-[25px] lg:leading-[34.1px] lg:font-[300] lg:w-[562px] lg:h-[136px]'>
              Help your teachers go the extra mile by capturing classroom
              attendance alongside students’ wellbeing. Now, you can read the
              mood in your whole school in real time.
            </p>

            <div className='flex items-center justify-center w-full min-h-[522px] mt-[40px] lg:h-[550px] lg:w-[272.89px] lg:absolute lg:top-[451px] lg:left-[861px]'>
              <img className='w-[259px]' src={placeholder} alt='Roodi' />
            </div>
          </section>

          {/* two */}
          <section className='two lg:relative lg:h-[730px]'>
            <div className='relative mt-[29.85] flex lg:mt-[205px] lg:ml-[579px]'>
              <b className='absolute z-[-1] top-[30px] even'>2</b>
              <h3 className='font-[600] text-[26px] leading-[35.46px] min-h-[105px] ml-[30px] mt-[75px] lg:w-[601px] lg:h-[183px] lg:text-[45px] lg:leading-[61.38px]'>
                The parent-teacher communication tool that keeps you in the loop
                24/7
              </h3>
            </div>

            <p className='leading-[21.82px] text-[16px] ml-[30px] mt-[20px] min-h-[88px] lg:w-[601px] lg:h-[136px] lg:ml-[610px] lg:font-[300] lg:text-[25px] lg:leading-[34.1px] lg:mt-[40px]'>
              Correspondence™ allows teachers to communicate with parents
              without revealing contact details. You also control the narrative
              by approving which messages get delivered to parents.
            </p>

            <div className='flex items-center justify-center w-full min-h-[522px] mt-[40px] lg:h-[550px] lg:w-[272.89px] lg:absolute lg:top-[97px] lg:left-[146px]'>
              <img className='w-[259px]' src={placeholder} alt='Roodi' />
            </div>
          </section>

          {/* three */}
          <section className='one lg:relative lg:h-[730px]'>
            <div className='relative mt-[29.85] flex lg:mx-[100px] lg:mt-[100px]'>
              <b className='absolute top-[30px]'>3</b>
              <h3 className='font-[600] text-[26px] leading-[35.46px] min-h-[105px] ml-[30px] mt-[75px] lg:text-[45px] lg:w-[562px] lg:h-[183px] lg:leading-[61.38px]'>
                Securely record all your students’ scores in one database
              </h3>
            </div>

            <p className='leading-[21.82px] text-[16px] ml-[30px] mt-[20px] min-h-[88px] lg:mx-[130px] lg:mt-[40px] lg:text-[25px] lg:leading-[34.1px] lg:font-[300] lg:w-[562px] lg:h-[136px]'>
              Roodi removes the hassles of managing spreadsheets and keeps your
              records secure with top-grade security. Empower your teachers with
              the tool to record test and exam scores easily.
            </p>

            <div className='flex items-center justify-center w-full min-h-[522px] mt-[40px] lg:h-[550px] lg:w-[272.89px] lg:absolute lg:top-[97px] lg:left-[838px]'>
              <img className='w-[259px]' src={placeholder} alt='Roodi' />
            </div>
          </section>

          {/* four */}
          <section className='two lg:relative lg:h-[730px]'>
            <div className='relative mt-[29.85] flex lg:mt-[205px] lg:ml-[579px]'>
              <b className='absolute z-[-1] top-[30px] even'>4</b>
              <h3 className='font-[600] text-[26px] leading-[35.46px] min-h-[105px] ml-[30px] mt-[75px] lg:w-[601px] lg:h-[183px] lg:text-[45px] lg:leading-[61.38px]'>
                Generate hundreds of Report Cards™ in 2 minutes
              </h3>
            </div>

            <p className='leading-[21.82px] text-[16px] ml-[30px] mt-[20px] min-h-[88px] lg:w-[601px] lg:h-[136px] lg:ml-[610px] lg:font-[300] lg:text-[25px] lg:leading-[34.1px] lg:mt-[40px]'>
              Report card compilation don’t have to take weeks. With Roodi, you
              generate Report Cards™ for all your students instantly. Now,
              parents receive their children’s report faster and your holidays
              start sooner.
            </p>

            <div className='flex items-center justify-center w-full min-h-[522px] mt-[40px] lg:h-[550px] lg:w-[272.89px] lg:absolute lg:top-[97px] lg:left-[146px]'>
              <img className='w-[259px]' src={placeholder} alt='Roodi' />
            </div>
          </section>

          {/* five */}
          <section className='one lg:relative lg:h-[730px]'>
            <div className='relative mt-[29.85] flex lg:mx-[100px] lg:mt-[100px]'>
              <b className='absolute top-[30px]'>5</b>
              <h3 className='font-[600] text-[26px] leading-[35.46px] min-h-[105px] ml-[30px] mt-[75px] lg:text-[45px] lg:w-[562px] lg:h-[183px] lg:leading-[61.38px]'>
                Increase parent engagement with Homework™ assignments
              </h3>
            </div>

            <p className='leading-[21.82px] text-[16px] ml-[30px] mt-[20px] min-h-[88px] lg:mx-[130px] lg:mt-[40px] lg:text-[25px] lg:leading-[34.1px] lg:font-[300] lg:w-[562px] lg:h-[136px]'>
              Roodi remedies low parent engagement experienced in communication
              books by enabling your teachers to securely assign home works that
              get delivered with notifications to drive parents into action.
            </p>

            <div className='flex items-center justify-center w-full min-h-[522px] mt-[40px] lg:h-[550px] lg:w-[272.89px] lg:absolute lg:top-[97px] lg:left-[838px]'>
              <img className='w-[259px]' src={placeholder} alt='Roodi' />
            </div>
          </section>
        </div>

        <div className='relative min-h-[720.75px] lg:h-[903px]'>
          {/* mobile svg  */}
          <svg
            className='absolute top-[14.67px] z-[-1] w-full lg:hidden'
            width='500'
            height='752'
            viewBox='0 0 393 722'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='-3.17944'
              y='0.669922'
              width='655.459'
              height='500.975'
              transform='rotate(23.5 -3.17944 0.669922)'
              fill='#E4D9FE'
            />
          </svg>

          <svg
            className='lg:absolute lg:top-[16.58px] lg:z-[-1] lg:w-full lg:block hidden'
            width='1280'
            height='993'
            viewBox='0 0 1280 993'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='-404'
              y='384.068'
              width='1848.29'
              height='622.451'
              transform='rotate(-11.9932 -404 384.068)'
              fill='#E4D9FE'
            />
          </svg>

          <div className='mx-[20px] z-[1] max-w-full overflow-hidden lg:flex lg:flex-col lg:items-center'>
            <h2 className='font-[700] text-[40px] leading-[54.56px] mt-[145.33px] min-h-[165px] lg:h-[178px] lg:w-[772px] lg:mt-[251px] lg:text-[65px] lg:leading-[88.66px] lg:text-center'>
              Become an early adopter, pay 70% less forever.
            </h2>

            <p className='leading-[24.55px] text-[18px] mt-[30px] min-h-[125px] lg:h-[114px] lg:w-[922px] lg:text-[28px] lg:font-[300] lg:leading-[38.19px] lg:mt-[50px]'>
              Roodi will be released in time for the new term starting April.
              Get ahead of competing schools, become an early adopter to enjoy
              3-month free trial, and pay 70% less than other schools.
            </p>

            <div className='mx-[20px] mt-[30px] lg:w-[353px] lg:h-[48px]'>
              <button onClick={handlePopup2}>JOIN THE WAITLIST</button>
            </div>
          </div>
        </div>

        <div className='mx-[20px] mt-[26.54px] lg:h-[716px] lg:w-[636px] lg:mx-auto lg:mt-[9px]'>
          <div
            className='min-h-max border-[2px] border-[#351D6B4D] rounded-[15px] lg:flex lg:flex-col lg:items-center relative'
            onClick={handlePopup}
          >
            <img
              className='w-[100%] h-[100%] rounded-[15px]'
              src='https://img.youtube.com/vi/SZmOIL5HnXU/hqdefault.jpg'
              alt='Roodi technologies'
            />

            <SmartDisplayIcon className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 !text-[80px] ' />
          </div>
        </div>

        <section className='two lg:h-[1061px] lg:mt-[70px]'>
          <div className=' mx-[20px] min-h-[1090px] lg:w-full'>
            <p className='min-h-[19px] font-[700] text-[14px] mt-[121px] lg:h-[34px] lg:w-[941px] lg:mx-auto lg:text-center lg:mt-[108px] lg:text-[25px] lg:leading-[34.1px]'>
              Dependable education technology
            </p>

            <h2 className='mt-[10px] font-[600] text-[36px] leading-[49.1px] min-h-[147px] lg:w-[940px] lg:h-[164px] lg:mt-[0px] lg:text-center lg:text-[60px] lg:mx-auto lg:leading-[81.84px]'>
              Designed to help you run schools that are modern and fast.
            </h2>

            <div className=' lg:flex lg:mx-[100px] lg:flex-wrap lg:justify-around'>
              <div className='mt-[43px]'>
                <h3 className='font-[700] text-[20px] leading-[27.28px] min-h-[27px] lg:h-[] lg:text-[32px] lg:leading-[43.65px]'>
                  <span className='text-[#FFA100] font-[1000] text-[30px]'>
                    _&nbsp;
                  </span>
                  Easy to use
                </h3>

                <p className='mt-[10px] text-[16px] leading-[21.28px] min-h-[44px] lg:text-[25px] lg:leading-[34.1px] lg:w-[412px] lg:h-[102px]'>
                  With a modern and minimalistic design, using Roodi is as easy
                  as texting on WhatsApp.
                </p>
              </div>

              <div className='mt-[40px] '>
                <h3 className='font-[700] text-[20px] leading-[27.28px] min-h-[27px] lg:h-[] lg:text-[32px] lg:leading-[43.65px]'>
                  <span className='text-[#FFA100] font-[1000] text-[30px]'>
                    _&nbsp;
                  </span>
                  Fast and reliable
                </h3>

                <p className='mt-[10px] text-[16px] leading-[21.28px] min-h-[44px] lg:text-[25px] lg:leading-[34.1px] lg:w-[412px] lg:h-[102px]'>
                  Roodi is built on the world’s fastest cloud infrastructures
                  with 99.99% uptime.
                </p>
              </div>

              <div className='mt-[40px] '>
                <h3 className='font-[700] text-[20px] leading-[27.28px] min-h-[27px] lg:h-[] lg:text-[32px] lg:leading-[43.65px]'>
                  <span className='text-[#FFA100] font-[1000] text-[30px]'>
                    _&nbsp;
                  </span>
                  Top-level security
                </h3>

                <p className='mt-[10px] text-[16px] leading-[21.28px] min-h-[44px] lg:text-[25px] lg:leading-[34.1px] lg:w-[412px] lg:h-[102px]'>
                  We protect your data with a 256-bit AES algorithm, both at
                  rest and on transit.
                </p>
              </div>

              <div className='mt-[40px] '>
                <h3 className='font-[700] text-[20px] leading-[27.28px] min-h-[27px] lg:h-[] lg:text-[32px] lg:leading-[43.65px]'>
                  <span className='text-[#FFA100] font-[1000] text-[30px]'>
                    _&nbsp;
                  </span>
                  No hidden costs
                </h3>

                <p className='mt-[10px] text-[16px] leading-[21.28px] min-h-[44px] lg:text-[25px] lg:leading-[34.1px] lg:w-[412px] lg:h-[102px]'>
                  One simple, transparent fee for every student, that’s all we
                  charge. No surprises.
                </p>
              </div>

              <div className='mt-[40px] lg:text-center'>
                <h3 className='font-[700] text-[20px] leading-[27.28px] min-h-[27px] lg:h-[] lg:text-[32px] lg:leading-[43.65px]'>
                  <span className='text-[#FFA100] font-[1000] text-[30px]'>
                    _&nbsp;
                  </span>
                  Dedicated support
                </h3>

                <p className='mt-[10px] text-[16px] leading-[21.28px] min-h-[44px] lg:text-[25px] lg:leading-[34.1px] lg:w-[412px] lg:h-[102px]'>
                  Get personalized support from our dedicated team, from setup
                  to growth and beyond.
                </p>
              </div>
            </div>

            <div className=' mt-[65px] lg:w-[353px] lg:h-[48px] lg:mx-auto lg:text-[20px] lg:leading-[27.78px]'>
              <button onClick={handlePopup2}>JOIN THE WAITLIST</button>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {popup.type1 && (
        <div
          className='w-full h-full bg-[#341d6be8] fixed top-0 left-0 z-20 flex items-center justify-center'
          onClick={() => setPopup({ ...popup, type1: !popup.type1 })}
        >
          <iframe
            className='w-full aspect-video lg:max-w-[900px]'
            src='https://www.youtube.com/embed/SZmOIL5HnXU?autoplay=1'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
      )}

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

export default Home;
