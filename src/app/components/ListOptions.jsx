// ListOptions.jsx

import React, { useState } from 'react';
import Image from 'next/image';
import arrow from '../../../public/homepage/arrowicon.svg';
import bgImg from '../../../public/homepage/01-recruiters-frontal_1__1_.webp';

import { useRouter } from 'next/navigation';
import arrowDown from '../../../public/homepage/arrowDown.svg';
import hris from '../../../public/homepage/HRIS_HRIT_1.webp';
import hiringMan from '../../../public/homepage/Hiring_managers_1.webp';
import talentAcq from '../../../public/homepage/Talent_marketers_1.webp';
import talentMan from '../../../public/homepage/Talent_marketers_1.webp';
import chro from '../../../public/homepage/CHRO_hero.webp';
import { useSelector, useDispatch } from 'react-redux';
import { getDummyData } from '../redux/slice/dummy.slice';
import { capitalizeWord } from '../utils/helper';

const ListOptions = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  let currTabs = useSelector((store) => store?.dummy?.currentTab);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleSelect = async (selectedOption) => {
    //only changes the currentTAb
    dispatch(getDummyData(selectedOption));
    router.push(`/${selectedOption}`);
  };

  const listTags = [
    {
      id: 1,
      title: 'HRIS',
      path: 'HRIS',
      imgurl: hris,
      key: 'hris',
    },
    {
      id: 2,
      title: 'Talent Acquisition',
      path: 'talent-acquisition',
      imgurl: talentAcq,
      key: 'talentAcquisition',
    },
    {
      id: 3,
      title: 'Talent Management',
      path: 'talent-management',
      imgurl: talentMan,
      key: 'talentManagement',
    },
    {
      id: 4,
      title: 'Recruiters',
      path: 'recruiters',
      imgurl: hiringMan,
      key: 'recruiters',
    },
    {
      id: 5,
      title: 'CHRO',
      path: 'CHRO',
      imgurl: chro,
      key: 'chro',
    },
    {
      id: 5,
      title: 'Hiring Managers',
      path: 'hiring-managers',
      imgurl: chro,
      key: 'hiringManagers',
    },
  ];

  return (
    <>
      <div className="current-hero-opt" onMouseEnter={() => setIsHovered(true)}>
        <Image src={bgImg} width={30} height={30} alt="curr-opt" className="rounded-img" />
        <span>{capitalizeWord(currTabs, listTags)}</span>
        <Image
          src={arrowDown}
          width={20}
          height={20}
          style={{ color: 'white' }}
          alt="curr-opt"
          className="current-opt-arrow"
        />
      </div>
      {isHovered && (
        <ul
          className="select"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <li>
            <div className="current-hero-opt role-box">
              {/* <Image src={bgImg} width={30} height={30}  alt='curr-opt' className='rounded-img' /> */}
              <span>Role</span>
              <Image src={arrow} width={10} height={10} alt="curr-opt" className="current-opt-arrow" />
            </div>
          </li>
          {listTags?.map((list, idx) => (
            <li key={idx} onClick={() => handleSelect(list?.key)}>
              <div className="current-hero-opt">
                <Image
                  src={list?.imgurl}
                  width={30}
                  height={30}
                  alt="curr-opt"
                  className="rounded-img"
                />
                <span>{list?.title}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListOptions;
