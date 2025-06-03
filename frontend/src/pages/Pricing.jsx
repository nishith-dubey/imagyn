import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import { AppContext } from '../context/AppContext';

const Pricing = () => {

  const {user} = useContext(AppContext);

  const plans = [
    {
      name: 'Basic',
      description: 'Best for personal use.',
      price: '$10',
      credits: '100 credits'
    },
    {
      name: 'Advanced',
      description: 'Best for business use.',
      price: '$50',
      credits: '500 credits'
    },
    {
      name: 'Business',
      description: 'Best for enterprise use.',
      price: '$250',
      credits: '5000 credits'
    }
  ];

  return (
    <div className=''>
    <section className="bg-transparent flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Choose the plan</h1>
      
      <div className="flex transition-all duration-200 ease-in-out lg:flex-row flex-col gap-4 justify-between">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center border border-rose-200 sm:w-[280px] flex flex-col items-center">
            <img src={logo} alt="" className='w-12 m-4' />
            <h2 className="text-xl font-bold mb-2">{plan.name}</h2>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <p className="text-2xl font-bold mb-10">{plan.price}<span className='text-2xl mb-6 font-normal'> / {plan.credits}</span></p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
              { !user ? 'Get started' : 'Purchase'}
            </button>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Pricing;