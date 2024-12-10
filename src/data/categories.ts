export const FEATURED_CATEGORIES = [
  {
    id: 'new-arrivals',
    name: '新品上市',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    description: '发现最新上架的商品'
  },
  {
    id: 'trending',
    name: '热门推荐',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800',
    description: '当下最受欢迎的商品'
  },
  {
    id: 'best-sellers',
    name: '畅销好物',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
    description: '长期热销的优质商品'
  },
  {
    id: 'limited-edition',
    name: '限量发售',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
    description: '限量版特别商品'
  }
];

export const ALL_CATEGORIES = [
  {
    id: 'electronics',
    name: '数码电子',
    subcategories: [
      { id: 'smartphones', name: '智能手机' },
      { id: 'laptops', name: '笔记本电脑' },
      { id: 'smartwatches', name: '智能手表' },
      { id: 'headphones', name: '耳机音响' },
      { id: 'tablets', name: '平板电脑' }
    ]
  },
  {
    id: 'fashion',
    name: '时尚服饰',
    subcategories: [
      { id: 'mens', name: '男装' },
      { id: 'womens', name: '女装' },
      { id: 'sports', name: '运动服饰' },
      { id: 'bags', name: '箱包手袋' },
      { id: 'accessories', name: '珠宝配饰' }
    ]
  },
  {
    id: 'home',
    name: '家居生活',
    subcategories: [
      { id: 'furniture', name: '家具' },
      { id: 'decor', name: '家居饰品' },
      { id: 'kitchen', name: '厨房用品' },
      { id: 'bedding', name: '床上用品' },
      { id: 'storage', name: '收纳整理' }
    ]
  },
  {
    id: 'beauty',
    name: '美妆个护',
    subcategories: [
      { id: 'skincare', name: '护肤品' },
      { id: 'makeup', name: '彩妆' },
      { id: 'perfume', name: '香水' },
      { id: 'tools', name: '美容仪器' },
      { id: 'personal-care', name: '个人护理' }
    ]
  },
  {
    id: 'books',
    name: '图书文具',
    subcategories: [
      { id: 'fiction', name: '文学小说' },
      { id: 'education', name: '教育考试' },
      { id: 'office', name: '办公文具' },
      { id: 'art', name: '艺术设计' },
      { id: 'magazines', name: '杂志期刊' }
    ]
  }
];