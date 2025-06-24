import React from 'react';
import Base from './components/Base';
import PopularDestinations from './components/PopularDestination';
import UserReviews from './components/UserReview';
import QueryForm from './components/QueryForm';
import PhotoGallery from './components/PhotoGallery';
import TripCategories from './components/TripCategories';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ExploreIndia from './components/ExploreIndia';
import ArrowLeftToRight from './components/ArrowLeftToRight';
import TrendingNow from './components/TrendingNow';
import GlobeComponent from './components/GlobeComponent';
import InternationalPackages from './components/InternationalPackages';
import GroupHolidays from './components/GroupHolidays';

const Home = () => {
  return (
    <div className="bg-gray-950">
      <Base />
      <PopularDestinations />
      <InternationalPackages />
      <ExploreIndia />
      <TrendingNow />
      <GroupHolidays />
      <UserReviews id="684b1678743424e7fb1074e7"/>
      <QueryForm />
      <PhotoGallery />
      <TripCategories />
      <GlobeComponent />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
