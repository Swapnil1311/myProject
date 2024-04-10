import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube, faPinterestP, faTiktok } from '@fortawesome/free-brands-svg-icons';


export const FooterSection = () => {
  return (
   <>
        <footer className="w-full bg-white text-black px-2 mt-10 py-10 flex flex-wrap justify-center md:justify-start md:gap-10">
        <div className="mb-6 md:mb-0">
    <h2 className="uppercase text-lg mt-4 md:mt-8">Products</h2>
    <div className="mt-1 text-sm text-gray-500">
      <p>TemplateX</p>
      <p>ExplorePluse</p>
      <p>FeatureFlow</p>
      <p>DesignEase</p>
      <p>WebFlex</p>
      <p>SwiftSite</p>
      <p>CreativeX</p>
      <p>ElementorEase</p>
      <p>ResponsiveRevamp</p>
    </div>
  </div>

  <div className="px-4 md:px-1 mb-6 md:mb-0">
    <h2 className="uppercase text-lg mt-4 md:mt-8">Company</h2>
    <div className="mt-1 text-sm text-gray-500">
      <p>Vision</p>
      <p>Mission</p>
      <p>Values</p>
      <p>Culture</p>
      <p>Team</p>
      <p>History</p>
    </div>
  </div>
  <div className="px-4 md:px-1 mb-6 md:mb-0">
    <h2 className="uppercase text-lg mt-4 md:mt-8">Community</h2>
    <div className="mt-1 text-sm text-gray-500">
      <p>Engagement</p>
      <p>Events</p>
      <p>Forums</p>
      <p>Projects</p>
      <p>Outreach</p>
    </div>
  </div>
  <div className="px-4 md:px-1 mb-6 md:mb-0">
    <h2 className="uppercase text-lg mt-4 md:mt-8">Support</h2>
    <div className="mt-1 text-sm text-gray-500">
      <p>Assistance</p>
      <p>Help</p>
      <p>Resources</p>
      <p>FAQS</p>
    </div>
  </div>
  <div className="px-4 md:px-1 mb-6 md:mb-0 md:gap-0">
    <h2 className="uppercase text-lg mt-4 md:mt-8">WIX</h2>
    <div className="mt-1 text-sm text-gray-500">
      <p>
        In our diverse community, we strive for innovation and collaboration.
        Together, we create, explore, and inspire. With unwavering support, we
        ensure your journey with us is seamless. Join us today and be a part of
        something extraordinary.
      </p>
      <div className="pt-3 flex gap-3">
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faPinterestP} />
        <FontAwesomeIcon icon={faTiktok} />
      </div>
    </div>
  </div>
</footer>

   </>
  )
}
