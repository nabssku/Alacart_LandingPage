import * as React from 'react';

import Showcase from '@/components/feature/feature';
import Jumbotron from '@/components/Jumbotron/Jumbotron';
import Footer from '@/components/Navigation/Footer';
// Import Component
import Navbar from '@/components/Navigation/Navbar';
import Feature5 from '@/components/section/feature5';
import Feature6 from '@/components/section/feature6';
import Feature7 from '@/components/section/feature7';
import MainFeature from '@/components/section/mainFeature';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Jumbotron />
      <Showcase />
      {/* <Videos /> */}
      <MainFeature />
      {/* <Feature /> */}
      <Feature6 />
      <Feature7 />
      <Feature5 />
      <Footer />
    </main>
  );
}
