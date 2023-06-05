import React from 'react';
import { useRef, useEffect } from 'react';
import { mount as MountMarketing } from 'marketing/MarketingApp';

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    MountMarketing(ref.current);
  }, []);
  return <div ref={ref}></div>;
};
export default MarketingApp;
