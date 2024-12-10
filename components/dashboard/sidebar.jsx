import { BaggageClaim, BarChart, Cable, ChevronLeft, ChevronRight, Files, Home, Link, PlusCircle, ReceiptText, ShoppingBag, ShoppingBasket, X } from 'lucide-react';
import React from 'react';

import SubscriptionCard from '../dashboard/SubscriptionCard';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


export default function Sidebar({showSidebar,setShowSidebar}) {
  console.log(showSidebar)
  const inventoryLink = [
    {
      title:"All",
      href:"/bill/inventory"
    },
    {
      title:"Items",
      href:"/bill/inventory/items"
    },
    {
      title:"Categories",
      href:"/bill/inventory/Categories"
    },
    {
      title:"Brands",
      href:"/bill/inventory/Brands"
    },
    {
      title:"Units",
      href:"/bill/inventory/units"
    },
    {
      title:"Warehouse",
      href:"/bill/inventory/Warehouse"
    },
    {
      title:"Inventory Adjustment",
      href:"/bill/inventory/adjustments"
    },
    {
      title:"Supplier",
      href:"/bill/inventory/supplier"
    },
  ]
  const salesLink = [
    {
      title:"Customers",
      href:""
    },
    {
      title:"Sales Order",
      href:""
    },
    {
      title:"Packages",
      href:""
    },
    {
      title:"Shipments",
      href:""
    },
    {
      title:"Invoices",
      href:""
    },
    {
      title:"Sales Receipt",
      href:""
    },
    {
      title:"Payment Receipt",
      href:""
    },
    {
      title:"Credit Note",
      href:""
    },
  ]
  
  return (
    <div className={`${showSidebar?'w-60 min-h-screen bg-slate-800 text-slate-50 fixed  lg:block z-50':'w-60 min-h-screen bg-slate-800 text-slate-50 fixed hidden lg:block z-50'}`}>
      {/* Top part */}
      <div className="flex flex-col">
        {/* Logo */}
        <div className="flex justify-between">
        <a href='#' className="bg-slate-950 flex space-x-2 items-center py-3 px-2 w-full">
          <ReceiptText />
          <span className='text-xl font-semibold'>Raibs Invoicing</span>
        </a>
        <button className='bg-slate-950 px-3 py-3 lg:hidden' onClick={()=>setShowSidebar(false)}>
          <X className='h-6 w-6 text-white'/>
        </button>
        </div>

        {/* Links */}
        <nav className='flex flex-col gap-3 py-4 px-3 py-6'>
          <a href='#' className='flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md'>
            <Home />
            <span>Home</span>
          </a>
          <Collapsible>
  <CollapsibleTrigger className='flex justify-between items-center w-full'> 
 <div className="flex items-center space-x-2 p-2">
 <BaggageClaim />
 
 <span>Inventory</span>
 </div>
 <ChevronRight className='w-4 h-4'/>
  </CollapsibleTrigger>
  <CollapsibleContent>
  {
    inventoryLink.map((item,i)=>{
      return(
        <a  onClick={()=>setShowSidebar(false)} key={i} className='flex items-center justify-between pl-10 pr-2 py-2 rounded-md hover:bg-slate-900 transition-all duration-300' href={item.href}><span>{item.title}</span>
        <PlusCircle className='w-5 h-5'/> 
        </a>
      )
    })
  }
  
  
 
  
  </CollapsibleContent>
</Collapsible>
<Collapsible>
  <CollapsibleTrigger className='flex justify-between items-center w-full'> 
  <div className="flex items-center space-x-2 p-2">
  <ShoppingBasket />
  <span>Sales</span>
  </div>
  <ChevronRight className='w-4 h-4'/>
  </CollapsibleTrigger>
  <CollapsibleContent>
  {
    salesLink.map((item,i)=>{
      return(
        <a key={i} className='flex items-center justify-between pl-10 pr-2 py-2 rounded-md hover:bg-slate-900 transition-all duration-300' href={item.href}><span>{item.title}</span>
        <PlusCircle className='w-5 h-5'/> 
        </a>
      )
    })
  }
  
  
 
  
  </CollapsibleContent>
</Collapsible>

         
         
          <button className='flex items-center space-x-2 p-2'>
            <ShoppingBag />
            <span>Purchase</span>
          </button>
          <a href='#' className='flex items-center space-x-2 p-2'>
            <Cable />
            <span>Integrations</span>
          </a>
          <a href='#' className='flex items-center space-x-2 p-2'>
            <BarChart />
            <span>Report</span>
          </a>
          <a href='#' className='flex items-center space-x-2 p-2'>
            <Files />
            <span>Documents</span>
          </a>
        </nav>
        <SubscriptionCard />
      </div>

      {/* Bottom */}
      <div className="flex flex-col mt-14">
        <button className="bg-slate-950 flex justify-center items-center py-3 px-2">
          <ChevronLeft />
        </button>
      </div>

      {/* Footer Icon or Subscription Card can be added here */}
    </div>
  );
}
