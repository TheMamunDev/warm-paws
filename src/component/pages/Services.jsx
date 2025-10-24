import React, { useState, useMemo, useEffect } from 'react';
import { Search, Sliders } from 'lucide-react';
import { useLoaderData } from 'react-router';
import PetCard from './PetCard';
import Skeleton from '../Skeleton';
import usePageTitle from '../Hooks/useTitle';

const Services = () => {
  usePageTitle('Services - WarmPaws');
  const pets = useLoaderData();
  const allServicesData = pets;
  const categories = [...new Set(allServicesData.map(item => item.category))];
  // console.log(categories);
  const priceData = allServicesData.map(el => el.price);
  const priceRange = Math.max(...priceData);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(priceRange);

  const handleClearBtn = () => {
    setSearchTerm('');
    setMaxPrice(priceRange);
    setSelectedCategory('All');
  };

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchTerm, selectedCategory, maxPrice]);

  const filteredServices = useMemo(() => {
    return allServicesData.filter(service => {
      const matchesSearch = service.serviceName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || service.category === selectedCategory;
      const matchesPrice = service.price <= maxPrice;
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, maxPrice]);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <header className="py-12 bg-[#264653] text-center shadow-lg">
        <h1 className="text-5xl font-extrabold text-[#F4A261]">
          Our Winter Service Catalog
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          Find the perfect cozy care service for your pet this season.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 p-6 bg-white rounded-xl shadow-lg h-fit lg:sticky top-20">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold text-[#264653] flex items-center">
                <Sliders size={20} className="mr-2 text-[#F4A261]" /> Filters
              </h2>
              <button
                onClick={handleClearBtn}
                className=" badge badge-lg font-medium cursor-pointer transition-colors duration-200 bg-gray-200 text-[#264653] hover:bg-gray-300 border-none"
              >
                Clear
              </button>
            </div>

            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text text-gray-600 font-semibold">
                  Search Services
                </span>
              </label>
              <label className="input input-bordered flex items-center gap-2 bg-[#FAF9F6] border-gray-300">
                <Search size={18} className="text-gray-400" />
                <input
                  type="text"
                  className="grow text-[#264653] border-none focus:outline-none"
                  placeholder="Name or Provider..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-6">
              <h3 className="text-gray-600 font-semibold mb-3">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`badge badge-lg font-medium cursor-pointer transition-colors duration-200 ${
                      selectedCategory === cat
                        ? 'bg-[#F4A261] text-white border-none'
                        : 'bg-gray-200 text-[#264653] hover:bg-gray-300 border-none'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-gray-600 font-semibold mb-3">
                Max Price:{' '}
                <span className="text-[#F4A261] font-bold">${maxPrice}</span>
              </h3>
              <input
                type="range"
                min={0}
                max={priceRange}
                value={maxPrice}
                onChange={e => setMaxPrice(e.target.value)}
                className="range range-xs"
                style={{
                  '--range-shdw': '#F4A261',
                  '--range-track': '#264653',
                }}
              />
            </div>
          </aside>

          <div className="lg:col-span-3">
            <h2 className="text-xl font-semibold text-[#264653] mb-4">
              Showing {filteredServices.length} Results
            </h2>
            {loading ? (
              <Skeleton count={allServicesData.length}></Skeleton>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredServices.length > 0 ? (
                  filteredServices.map((service, index) => (
                    <PetCard
                      key={service.serviceId}
                      service={service}
                      index={index}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-10 bg-white rounded-xl shadow-lg">
                    <p className="text-2xl text-gray-500">
                      No services match your filters. Try adjusting your
                      selections.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
