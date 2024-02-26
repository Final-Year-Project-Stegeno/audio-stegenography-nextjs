import React from 'react'
import CommonLayout from '../components/CommonLayout'

const About: React.FC = () => {
  return (
    <CommonLayout title='About audio stegenography'>
      <div className='mb-6'>
        <h1 className='text-2xl font-semibold text-title leading-9'>Introduction</h1>
        <p className='text-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, voluptatum recusandae, temporibus incidunt sequi quasi dicta corrupti necessitatibus ut porro assumenda deserunt sed est aliquid. Veniam quo commodi nam placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus velit, dolores veniam est quis, nisi quasi dolor, eius sequi quisquam veritatis sed fugiat repudiandae vero accusamus labore qui architecto. Dolores, tenetur enim!</p>
      </div>
      <div className='mb-6'>
        <h1 className='text-2xl font-semibold text-title leading-9'>Tech Tools</h1>
        <ul className='text-para'>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
        </ul>
      </div>
      <div className='mb-6'>
        <h1 className='text-2xl font-semibold text-title leading-9'>Project Setup</h1>
        <p className='text-para list-disc'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora eligendi laboriosam impedit reprehenderit placeat cum molestias asperiores voluptatum laudantium culpa earum quasi aut iusto illum, non natus minima dignissimos unde suscipit accusamus quae explicabo tempore recusandae libero. Officia recusandae velit obcaecati nam animi tenetur modi, officiis harum nulla distinctio saepe voluptate nostrum quia doloremque nobis incidunt sint, fugit iusto soluta, laborum hic qui ducimus beatae odit. Ipsam voluptatibus accusamus ducimus itaque, officiis quis facere inventore doloremque modi doloribus labore voluptatem assumenda nulla odio accusantium maxime debitis aperiam error, aut, ullam excepturi hic ea tenetur. Cumque veniam doloremque odit debitis voluptates.
        </p>
      </div>

    </CommonLayout>
  )
}

export default About
