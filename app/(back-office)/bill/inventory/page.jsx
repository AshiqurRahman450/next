"use client"
import React from 'react'
import FixedHeader from '../../../../components/dashboard/FixedHeader'
import {  Diff, Factory, LayoutGrid, LayoutPanelTop, Plus, Scale,  Slack, Warehouse } from 'lucide-react'
import OptionCard from '../../../../components/dashboard/optionCard'

export default function inventory() {
 
  const optionCards =[
   
    {
      title:"Items",
      description:"Create Standalone items and services that you buy and sell ",
      link:"/bill/inventory/items/New",
      linkTitle:"New Items",
      enabled:true,
      icon: LayoutGrid
    },
    {
      title:"Categories",
      description:"Bundle different items together and sell them as kits",
      link:"/bill/inventory/Categories/New",
      linkTitle:"New Category",
      enabled:true,
      icon: LayoutPanelTop
    },
    {
      title:"Brands",
      description:"Tweak your item prices for specific contacts or transactions",
      link:"/bill/inventory/Brands/New",
      linkTitle:"New Brand",
      enabled:true,
      icon: Slack
    },
    {
      title:"Warehouse",
      description:"Tweak your item prices for specific contacts or transactions",
      link:"/bill/inventory/Warehouse/New",
      linkTitle:"New Warehouse",
      enabled:true,
      icon: Warehouse
    },
    {
      title:"Units",
      description:"Tweak your item prices for specific contacts or transactions",
      link:"/bill/inventory/units/New",
      linkTitle:"New Unit",
      enabled:true,
      icon: Scale,
    },
    {
      title:"Inventory Adjustments",
      description:"Transfer Stock from the main Warehouse",
      link:"/bill/inventory/adjustments/New",
      linkTitle:"New Adjustments",
      enabled:true,
      icon: Diff,
    },
    {
      title:"Supplier",
      description:"Transfer Stock from the main Warehouse",
      link:"/bill/inventory/supplier/New",
      linkTitle:"New Supplier",
      enabled:true,
      icon: Factory,
    },
    
  ]
  return (
    <div>
        <FixedHeader newLink="/bill/inventory/items/New"/> 
        <div className='grid grid-col-1 lg:grid-cols-3 md:grid=-cols-2 py-3 px-16 gap-6'>
            {
              optionCards.map((card,i)=>{
                return(
                  <OptionCard optionData={card} key={i}/>
                )
              })
            }  
         
        </div>
      
    </div>
   
  )
}
