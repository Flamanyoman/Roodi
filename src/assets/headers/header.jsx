import iconsmall from '../../assets/images/iconsmall.svg';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

export const Header1 = (props) => {
  return (
    <header
      className={`w-full ${
        props.header2 ? 'h-[60px] sticky top-0 bg-[white] z-[15]' : 'h-[108px]'
      } flex items-center justify-center lg:justify-start lg:h-[77px] lg:border-b-[2px] lg:border-[#351D6B59] transition-all duration-[10] ease-in-out`}
    >
      <div
        className={`h-[80px] w-[100%]  flex items-center justify-between mx-[20px] ${
          !props.header2 && 'hidden'
        }`}
      >
        <Link to='investors'>
          <img className='h-[76px] w-[80px]' src={iconsmall} alt='roodi logo' />
        </Link>

        <button
          className=' hidden lg:w-[353px] lg:h-[48px] lg:flex items-center justify-center'
          onClick={props.handlePopup2}
        >
          JOIN THE WAITLIST
        </button>
      </div>
    </header>
  );
};

export const Header2 = (props) => {
  return (
    <div
      className={` ${
        props.header2
          ? 'h-[60px] sticky top-0 bg-[white] z-[15]'
          : 'h-[108px] lg:mr-[20px]'
      } flex items-center justify-center lg:h-[99px] lg:border-b-[2px] lg:border-[#351D6B59] lg:flex lg:justify-between lg:transition-all duration-[10] ease-in-out`}
    >
      <Link to='/investors'>
        <img
          className={`w-[205px] h-[175px] ${props.header2 && 'hidden'}`}
          src={logo}
          alt='roodi logo'
        />
      </Link>

      <button
        className=' hidden lg:w-[353px] lg:h-[48px] lg:flex items-center justify-center'
        onClick={props.handlePopup2}
      >
        JOIN THE WAITLIST
      </button>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className='lg:flex lg:mx-[100px] lg:flex-wrap lg:justify-around'>
        <div className='w-full h-[108px] flex items-center justify-center border-t-2 border-[#351D6B1A]'>
          <Link to='/investors'>
            <img className='w-[205px] h-[175px]' src={logo} alt='roodi logo' />
          </Link>
        </div>

        <div className=' mx-[20px] flex flex-col items-center'>
          <p className='mt-[5px] min-h-[34px] text-[14px] leading-[19.1px] max-w-[264px] text-center'>
            The best solution for schools of all sizes to ensure that no child
            is left behind.
          </p>

          <div className='flex justify-between item-center w-[100%] min-h-[30px] mt-[36px]'>
            <p className='text-[14px] font-[600] flex justify-around items-center lg:mx-[20px]'>
              <svg
                width='19'
                height='30'
                viewBox='0 0 19 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15.0838 1.875C15.5839 1.875 16.0634 2.07254 16.417 2.42417C16.7706 2.77581 16.9693 3.25272 16.9693 3.75V26.25C16.9693 26.7473 16.7706 27.2242 16.417 27.5758C16.0634 27.9275 15.5839 28.125 15.0838 28.125H3.77095C3.27089 28.125 2.79131 27.9275 2.43772 27.5758C2.08412 27.2242 1.88547 26.7473 1.88547 26.25V3.75C1.88547 3.25272 2.08412 2.77581 2.43772 2.42417C2.79131 2.07254 3.27089 1.875 3.77095 1.875H15.0838ZM3.77095 0C2.77083 0 1.81168 0.395088 1.10449 1.09835C0.397295 1.80161 0 2.75544 0 3.75V26.25C0 27.2446 0.397295 28.1984 1.10449 28.9016C1.81168 29.6049 2.77083 30 3.77095 30H15.0838C16.0839 30 17.0431 29.6049 17.7503 28.9016C18.4575 28.1984 18.8547 27.2446 18.8547 26.25V3.75C18.8547 2.75544 18.4575 1.80161 17.7503 1.09835C17.0431 0.395088 16.0839 0 15.0838 0L3.77095 0Z'
                  fill='#351D6B'
                  fill-opacity='0.74'
                />
                <path
                  d='M9.42734 26.25C9.9274 26.25 10.407 26.0525 10.7606 25.7008C11.1142 25.3492 11.3128 24.8723 11.3128 24.375C11.3128 23.8777 11.1142 23.4008 10.7606 23.0492C10.407 22.6975 9.9274 22.5 9.42734 22.5C8.92729 22.5 8.44771 22.6975 8.09411 23.0492C7.74052 23.4008 7.54187 23.8777 7.54187 24.375C7.54187 24.8723 7.74052 25.3492 8.09411 25.7008C8.44771 26.0525 8.92729 26.25 9.42734 26.25Z'
                  fill='#351D6B'
                  fill-opacity='0.74'
                />
              </svg>
              &nbsp; <span className='underline'>+234 (0) 903 164 1365</span>
            </p>

            <p className='text-[14px] font-[600] flex justify-around items-center lg:mx-[20px]'>
              <svg
                width='26'
                height='20'
                viewBox='0 0 26 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M25.3401 2.5C25.3401 1.125 24.1998 0 22.8061 0H2.53401C1.14031 0 0 1.125 0 2.5V17.5C0 18.875 1.14031 20 2.53401 20H22.8061C24.1998 20 25.3401 18.875 25.3401 17.5V2.5ZM22.8061 2.5L12.6701 8.75L2.53401 2.5H22.8061ZM22.8061 17.5H2.53401V5L12.6701 11.25L22.8061 5V17.5Z'
                  fill='#351D6B'
                  fill-opacity='0.74'
                />
              </svg>
              &nbsp; <span className='underline'>support@roodi.co</span>
            </p>
          </div>
        </div>

        <p className='w-[full] flex items-center justify-center min-h-[25px] mt-[15px] text-[14px] font-[600]'>
          <svg
            width='18'
            height='25'
            viewBox='0 0 18 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.89159 5.625C9.7338 5.625 10.5415 5.95424 11.1371 6.54029C11.7326 7.12634 12.0672 7.9212 12.0672 8.75C12.0672 9.16038 11.985 9.56674 11.8254 9.94589C11.6658 10.325 11.4319 10.6695 11.1371 10.9597C10.8422 11.2499 10.4921 11.4801 10.1068 11.6371C9.72155 11.7942 9.30861 11.875 8.89159 11.875C8.04937 11.875 7.24166 11.5458 6.64612 10.9597C6.05059 10.3737 5.71602 9.5788 5.71602 8.75C5.71602 7.9212 6.05059 7.12634 6.64612 6.54029C7.24166 5.95424 8.04937 5.625 8.89159 5.625ZM8.89159 0C11.2498 0 13.5114 0.921872 15.1789 2.56282C16.8464 4.20376 17.7832 6.42936 17.7832 8.75C17.7832 15.3125 8.89159 25 8.89159 25C8.89159 25 0 15.3125 0 8.75C0 6.42936 0.936789 4.20376 2.60429 2.56282C4.27178 0.921872 6.53339 0 8.89159 0ZM8.89159 2.5C7.20716 2.5 5.59173 3.15848 4.40066 4.33058C3.20959 5.50269 2.54045 7.0924 2.54045 8.75C2.54045 10 2.54045 12.5 8.89159 20.8875C15.2427 12.5 15.2427 10 15.2427 8.75C15.2427 7.0924 14.5736 5.50269 13.3825 4.33058C12.1914 3.15848 10.576 2.5 8.89159 2.5Z'
              fill='#351D6B'
              fill-opacity='0.74'
            />
          </svg>
          &nbsp; 20 Olusegun Ajayi St., Lekki, (Lagos) Nigeria.
        </p>
      </div>

      <div className=' mx-[20px] flex flex-col items-center mb-[25px]'>
        <p className='text-[14px] leading-[19.1px] text-center mt-[12px]'>
          Privacy Policy
        </p>
        <p className='text-[14px] leading-[19.1px] text-center mt-[12px]'>
          Terms of Service
        </p>
        <p className='text-[14px] leading-[19.1px] text-center mt-[12px]'>
          All rights reserved by Roodi Technologies Limited
        </p>
      </div>
    </footer>
  );
};
