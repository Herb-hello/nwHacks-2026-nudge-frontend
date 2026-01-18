import { useState } from 'react';
import Navbar from '../components/navbar';
import PhoneFrame from '../components/phoneFrame';

export default function InventoryPage() {
  const [items, setItems] = useState([
    { id: 1, name: 'Chicken', daysLeft: 3, type: 'fridge', expired: false },
    { id: 2, name: 'Bread', daysLeft: 7, type: 'fridge', expired: false },
    { id: 3, name: 'Yogurt', daysLeft: 21, type: 'fridge', expired: false },
    { id: 4, name: 'Flour', type: 'pantry', expired: false },
    { id: 5, name: 'Sugar', type: 'pantry', expired: false }
  ]);
  
  const [filter, setFilter] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', daysLeft: '', type: 'fridge' });
  const [selectedFeed, setSelectedFeed] = useState('Feed 1');

  const handleAddItem = () => {
    if (newItem.name.trim()) {
      const item = {
        id: Date.now(),
        name: newItem.name,
        daysLeft: newItem.type === 'fridge' && newItem.daysLeft ? parseInt(newItem.daysLeft) : undefined,
        type: newItem.type,
        expired: false
      };
      setItems([...items, item]);
      setNewItem({ name: '', daysLeft: '', type: 'fridge' });
      setShowAddModal(false);
    }
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleFilterClick = (filterType) => {
    setFilter(filter === filterType ? 'all' : filterType);
  };

  const getFilteredItems = () => {
    switch(filter) {
      case 'expired':
        return items.filter(item => item.type === 'fridge' && (item.expired || (item.daysLeft !== undefined && item.daysLeft <= 0)));
      case '3days':
        return items.filter(item => item.type === 'fridge' && item.daysLeft !== undefined && item.daysLeft <= 3 && item.daysLeft > 0);
      case '7days':
        return items.filter(item => item.type === 'fridge' && item.daysLeft !== undefined && item.daysLeft <= 7 && item.daysLeft > 0);
      default:
        return items;
    }
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <PhoneFrame>
        <div className="relative w-full h-full bg-white overflow-hidden">
          <div
            className="w-full h-[calc(100%-56px)] overflow-y-auto scrollbar-hide"
            data-name="InventoryPage"
          >
            <div className="flex flex-col px-10 pt-16 pb-6 w-full">
              {/* Header */}
              <h2 className="text-2xl font-bold text-black mb-6">
                Let's see what's hiding in your fridge...
              </h2>
              
              <h1 className="text-3xl font-bold text-black mb-4">
                Live View
              </h1>

              {/* Camera Feed */}
              <div className="relative mb-6">
                <img 
                  src="http://10.19.134.222:3001/relay-stream" 
                  alt="Fridge interior"
                  className="w-full h-56 object-cover rounded-2xl shadow-md border border-black"
                />
                
                {/* Feed Selector */}
                <div className="absolute top-4 right-4 bg-white px-2.5 py-1.5 rounded-md border-[1.5px] border-black flex items-center gap-2">
                  <span className="text-sm">{selectedFeed}</span>
                  <span className="text-sm">^</span>
                </div>
              </div>

              {/* Inventory Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-black">
                  Inventory
                </h2>
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="bg-orange-200 px-6 py-2 rounded-xl shadow-md border border-black hover:bg-orange-300 transition-colors flex items-center gap-2"
                >
                  <span className="text-base font-medium text-black">
                    Add Item
                  </span>
                  <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="14" height="18" fill="url(#pattern0_add)"/>
                    <defs>
                      <pattern id="pattern0_add" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_add" transform="matrix(0.0111111 0 0 0.00864198 0 0.111111)"/>
                      </pattern>
                      <image id="image0_add" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB60lEQVR4nO3by2oUURSF4TWLGm/vYNTHUwMi5DII+HQanGjiJQEfwRaSYbOk4CSDIKGrqFrnVNf/wZ4kk33+UTfslgAAAAAswUNJD2ovsa2eS/oo6bckl7mUdCLpWe3ltsXrO4HvThf8Ve0l5+6xpIt7It/MT0m7tZedsw8bRL6Z97WXnbMvPUKf1l52zq57hL6qveycuedgIEKHmNAZJnSGCZ1hQmeY0BkmdIYJnWFCZ5jQGSZ0hgmdYUJnmNAZJnSGCZ1hQmeY0BkmdIYJnWFCZ5jQGV5q6O6+bb9cBf0dEMIzn1V5+7spb/26i83zBh7rRuZM0t4UV51E1n+vWEe9zz5u4FFudI7GDH3ZwIPc6HT326PYkbRu4EFudNalEaE1k9Da8OcNS50LjeiogQe50TkY++PdWQOPcmPzQ9JTjaz7cE5s3c5XSS80kUeS3kr6XL6OemGzkvRJ0pvSYmu452AgQoeY0BkmdIYJnWFCZ5jQGSZ0hgmdYUJnmNAZJnSGCZ1hQmeY0BkmdIYJnWFCZ5jQGSZ0hgmdYUJnmNAZJnTGqkfkP7WXnbPTHqG7CyIMtN8jdHemhYF2Nzys/LZtt3A1vJT0/Z7I51NedS7NE0mH5bp+XeZX+Vv3P0xgZ8zfjAAAAABQs/4BEpDuTWusEyoAAAAASUVORK5CYII="/>
                    </defs>
                  </svg>
                </button>
              </div>

              {/* Filter Pills */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setFilter('expired')}
                  className={`px-4 py-1.5 rounded-full ${
                    filter === 'expired' ? 'bg-red-100' : 'bg-gray-100'
                  }`}
                >
                  <span className={`text-base ${
                    filter === 'expired' ? 'text-red-500' : 'text-black'
                  }`}>
                    EXPIRED
                  </span>
                </button>
                
                <button
                  onClick={() => setFilter('3days')}
                  className={`px-4 py-1.5 rounded-full ${
                    filter === '3days' ? 'bg-orange-100' : 'bg-gray-100'
                  }`}
                >
                  <span className="text-base text-black">
                    3 days left
                  </span>
                </button>
                
                <button
                  onClick={() => setFilter('7days')}
                  className={`px-4 py-1.5 rounded-full ${
                    filter === '7days' ? 'bg-blue-100' : 'bg-gray-100'
                  }`}
                >
                  <span className="text-base text-black">
                    7 days left
                  </span>
                </button>
              </div>

              {/* Inventory List */}
              <div className="space-y-3 pb-6">
                {filteredItems.map(item => (
                  <div 
                    key={item.id}
                    className="w-full bg-white rounded-2xl shadow-md border border-black p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      {item.type === 'fridge' ? (
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="27" height="26.8966" fill="url(#pattern0_fridge)"/>
                          <defs>
                            <pattern id="pattern0_fridge" patternContentUnits="objectBoundingBox" width="1" height="1">
                              <use xlinkHref="#image0_fridge" transform="matrix(0.0110685 0 0 0.0111111 0.00191572 0)"/>
                            </pattern>
                            <image id="image0_fridge" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzUlEQVR4nO3cO04DQRBF0RdhlsBviXwyYAewMsARsAdYAIKEqJClDhByIywN9Xpq7pEqQQ66rsZgI3skAAAAAChuX9KFpLWkD0kx8/mQ9CDpXNJKgziR9DxAnPineWo72q/kypHjW2zrlX0xQIRImjNn6PUAASJp7p2h3wcIEEmz2dUmFjY27sWD0DXHpnegT0mXko7aXLWfuUOVC70J+9PVAKHKhT7c8tiDAUKVC73r42MmY0PoJIROQugkhE5C6CS9A23epPx0PECoRbxhuR4gVLnQny02b8En4l48CF1zbNyLB6Frjo178SB0zQEAACjO/XIrlvLyzr14ELrm2LgXD0LXHBv34rH00HyadGK9A/Fp0on1DsSnSSe264Fi5mND6CSETkLoJIROQugkhE5C6CSETkLoJIROQugkvQPxHZaJ9Q7Ed1gm1jsQ32GZmHvxIHTNsXEvHoSuOTbuxYPQNcfGvXgQuubYuBePpYRe0k1g35yhua1xkvMBAkTSnMpo1W7LHsXnUdKezE6Kx35s/0sfwqrdA/++yB/Id0l37deF/Ur+zeuWw79oPHM5Z9ftlgVuNJ65nLNrry3x2uZ20KfgXM4JAACgv/kCEynC8GZaEygAAAAASUVORK5CYII="/>
                          </defs>
                        </svg>
                      ) : (
                        <svg width="40" height="23" viewBox="0 0 40 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="40" height="23" fill="url(#pattern0_pantry)"/>
                          <defs>
                            <pattern id="pattern0_pantry" patternContentUnits="objectBoundingBox" width="1" height="1">
                              <use xlinkHref="#image0_pantry" transform="matrix(0.00638889 0 0 0.0111111 0.2125 0)"/>
                            </pattern>
                            <image id="image0_pantry" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADgklEQVR4nO2du2sUQRzHPyQS7HygIYlokcb4H1j56ATT+ipFEF+lSay08BV7sRPsTaHG1kdUxEpE63TGaBSV4CMWOrIwB3rsbXbn5nezs/f7wLfKzOzvvvfL7nfv5u5AURSl5xkArgHvAFNCC8C0nadUYLqkwe3K5ikVKNvJ7VqschAFPjka/TF24alxxdHoS7ELT401wKOKJj8E+mMXnhrbgO8Vjf4BjMYuPDXuOZ467sYuPCX2OZrc0jg9wA57QXoBvAd+2wTxHLgMjK0yfy0w36XR83adRjICzFhji0zI/n6oYJ0LXZrcUrZO4+gDZksa8AVY12GdUXtB82F0Yy+MfcBx4NsqBpwvWKPsk1VW2QU1CYaAs8BFYGfJOWP2fJz3wL8C6zvMG/dscjIXxu32dvbfom8DgyXm9tsn6Gfb/JsF/w1vhIx+bdevLZ3uypaAg47dvb/DuMNCJrdUtt7g7ClR/KxNGmXP3YsFkeupsNFZ09SSsq8xLFXolg0Ft9p/hI3OIuVWEuxm43juzuOUsMktnaBmVH3FzFh9tqeIqtwKZHSnC3Ey3WxyuntzhWO+CmT0SxrQzaaL7l4MZHT25m1jutk4JJP2rC2l7DiN6mZTsbtNQCmKoiiKovTozsxe1kI3u1Jdd2b2sqZdjNZOJsyu1NhFm0SlRqNG0ySp0ajRNElqNDU1eqEGRZvE9NbFaL1hobKuuhg9YM3WzibcB0NPCxS3AkwAw1aTwK+I412V7THxxl6BAidyjjMVcbyrsjeovTEoUOBQznGGIo53VZX9KKVo347brToRa7yLPiDAnBpNkB2nN9Ro2nUdAc6o0YgmDqnk0QSjdyOA7+TRBKO9Jw6J5JG60SKJQyJ5pG509vUTYvhMHqkbLZI4JJJH6kafRBCfySN1o0USh0TySN1oscThO3mkbLRo4vCdPFI2WjRx+E4eKRstmjh8J4+UjRZNHL6TR8pG7yIAvpJHykZvIhA+ksdwzrpbIo6vVeJo8dhDwZM5656LOL5WicNn8lixZoxYTZXYPiA5vlaJQ+rdFpOQgiQOyX0eJhEFSRyS+zxMIgqWOKT2eZgEFDRxtLhfgwduAutODKOP1OCBm8A6EMPoPoHdS6bGehDz2x03As9qYIIR1lzB96MG/QGDY8ATYLkGphhPWrYGH9UfW1AURVEURVEURVEUReE//gIXkAGxE+X/vwAAAABJRU5ErkJggg=="/>
                          </defs>
                        </svg>
                      )}
                      <div>
                        <p className="text-base font-bold text-black">
                          {item.name}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      {item.type === 'fridge' && item.daysLeft !== undefined && (
                        <span className="text-base text-black">
                          ~{item.daysLeft} days left
                        </span>
                      )}
                      <button 
                        onClick={() => handleDeleteItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navbar at bottom of phone frame */}
          <div className="absolute bottom-5 left-0 right-0 z-50">
            <Navbar />
          </div>
        </div>
      </PhoneFrame>

      {/* Add Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Add New Item</h3>
              <button onClick={() => setShowAddModal(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Item Type</label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setNewItem({...newItem, type: 'fridge', daysLeft: ''})}
                    className={`flex-1 px-4 py-2 rounded-lg border-2 font-medium ${
                      newItem.type === 'fridge' 
                        ? 'border-orange-300 bg-orange-50' 
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    Fridge (Scanned)
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewItem({...newItem, type: 'pantry', daysLeft: ''})}
                    className={`flex-1 px-4 py-2 rounded-lg border-2 font-medium ${
                      newItem.type === 'pantry' 
                        ? 'border-orange-300 bg-orange-50' 
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    Pantry
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Item Name</label>
                <input
                  type="text"
                  value={newItem.name}
                  onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200"
                  placeholder="e.g., Milk"
                />
              </div>
              
              {newItem.type === 'fridge' && (
                <div>
                  <label className="block text-sm font-medium mb-2">Days Until Expiry</label>
                  <input
                    type="number"
                    value={newItem.daysLeft}
                    onChange={(e) => setNewItem({...newItem, daysLeft: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200"
                    placeholder="e.g., 7"
                  />
                </div>
              )}
              
              <button
                onClick={handleAddItem}
                className="w-full bg-orange-200 py-3 rounded-xl border border-black font-medium hover:bg-orange-300 transition-colors"
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}