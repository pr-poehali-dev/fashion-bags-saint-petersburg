import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Мессенджер Urban',
      price: 8990,
      oldPrice: 12990,
      category: 'Сумки',
      image: 'https://cdn.poehali.dev/files/65d24ba1-4959-466b-979b-9bf84d76ddce.jpeg',
      badge: 'Хит',
    },
    {
      id: 2,
      name: 'Рюкзак Minimal',
      price: 9990,
      oldPrice: 14990,
      category: 'Рюкзаки',
      image: 'https://cdn.poehali.dev/projects/215c857e-6073-4744-bd2b-f165749465f7/files/2ea3afde-7889-4c7f-ad5d-90b3dd7796b4.jpg',
      badge: '-33%',
    },
    {
      id: 3,
      name: 'Кошелек Slim',
      price: 2990,
      oldPrice: 4990,
      category: 'Кошельки',
      image: 'https://cdn.poehali.dev/projects/215c857e-6073-4744-bd2b-f165749465f7/files/c7ea969c-4edb-4484-8b5c-cad538a7bdf3.jpg',
      badge: '-40%',
    },
    {
      id: 4,
      name: 'Портфель Business',
      price: 12990,
      category: 'Сумки',
      image: 'https://cdn.poehali.dev/files/65d24ba1-4959-466b-979b-9bf84d76ddce.jpeg',
      badge: 'Новинка',
    },
  ];

  const categories = [
    { id: 'bags', name: 'Сумки', icon: 'Briefcase' },
    { id: 'backpacks', name: 'Рюкзаки', icon: 'Backpack' },
    { id: 'wallets', name: 'Кошельки', icon: 'Wallet' },
    { id: 'accessories', name: 'Аксессуары', icon: 'Watch' },
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold">
              <span className="text-primary">СУМКИ </span>
              <span className="text-foreground"> SPb</span>
            </h1>
            <nav className="hidden md:flex gap-6">
              <button
                onClick={() => setCurrentPage('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentPage === 'home' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setCurrentPage('catalog')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentPage === 'catalog' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Каталог
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentPage === 'about' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                О магазине
              </button>
              <button
                onClick={() => setCurrentPage('delivery')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentPage === 'delivery' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Доставка и оплата
              </button>
              <button
                onClick={() => setCurrentPage('sales')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentPage === 'sales' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Акции
              </button>
              <button
                onClick={() => setCurrentPage('contacts')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentPage === 'contacts' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Контакты
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-white flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      {currentPage === 'home' && (
        <main>
          <section className="relative bg-gradient-to-br from-foreground via-foreground to-primary text-white">
            <div className="container py-24 md:py-32">
              <div className="max-w-2xl animate-fade-in">
                <Badge className="mb-4 bg-secondary">Новая коллекция 2025</Badge>
                <h2 className="text-5xl md:text-6xl font-bold mb-6">Твой стиль, твоя сумка...</h2>
                <p className="text-lg md:text-xl mb-8 text-white/90">
                  Премиальные сумки и аксессуары для современного городского стиля. Доставка по Санкт-Петербургу за 1 день.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setCurrentPage('catalog')}>
                    Смотреть каталог
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-foreground">
                    Акции и скидки
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container">
              <h3 className="text-3xl font-bold mb-8 text-center">Категории</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category) => (
                  <Card
                    key={category.id}
                    className="cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
                    onClick={() => setCurrentPage('catalog')}
                  >
                    <CardContent className="flex flex-col items-center justify-center p-8">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon name={category.icon as any} size={32} className="text-primary" />
                      </div>
                      <p className="font-semibold text-center">{category.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold">Хиты продаж</h3>
                <Button variant="outline" onClick={() => setCurrentPage('catalog')}>
                  Все товары
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <Card
                    key={product.id}
                    className="group overflow-hidden cursor-pointer transition-all hover:shadow-xl animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />
                      {product.badge && (
                        <Badge className="absolute top-4 right-4 bg-secondary">{product.badge}</Badge>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                      <h4 className="font-semibold mb-2">{product.name}</h4>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl font-bold text-primary">{product.price.toLocaleString('ru-RU')} ₽</span>
                        {product.oldPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {product.oldPrice.toLocaleString('ru-RU')} ₽
                          </span>
                        )}
                      </div>
                      <Button className="w-full" onClick={addToCart}>
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        В корзину
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
            <div className="container text-center">
              <h3 className="text-4xl font-bold mb-4">Скидка 15% на первый заказ</h3>
              <p className="text-xl mb-8 text-white/90">Подпишитесь на рассылку и получите промокод</p>
              <div className="max-w-md mx-auto flex gap-2">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground"
                />
                <Button className="bg-white text-primary hover:bg-white/90">Подписаться</Button>
              </div>
            </div>
          </section>
        </main>
      )}

      {currentPage === 'catalog' && (
        <main className="py-16">
          <div className="container">
            <h2 className="text-4xl font-bold mb-8">Каталог товаров</h2>
            <div className="flex gap-8">
              <aside className="w-64 hidden lg:block">
                <h3 className="font-semibold mb-4">Категории</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      className="w-full text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </aside>
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <Card key={product.id} className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all">
                      <div className="relative aspect-square overflow-hidden bg-muted">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                        />
                        {product.badge && (
                          <Badge className="absolute top-4 right-4 bg-secondary">{product.badge}</Badge>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                        <h4 className="font-semibold mb-2">{product.name}</h4>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xl font-bold text-primary">{product.price.toLocaleString('ru-RU')} ₽</span>
                          {product.oldPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {product.oldPrice.toLocaleString('ru-RU')} ₽
                            </span>
                          )}
                        </div>
                        <Button className="w-full" onClick={addToCart}>
                          <Icon name="ShoppingCart" size={18} className="mr-2" />
                          В корзину
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {currentPage === 'about' && (
        <main className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-bold mb-8">О магазине</h2>
            <div className="prose prose-lg">
              <p className="text-lg mb-6">
                <strong>MENSTYLE</strong> — это современный интернет-магазин премиальных мужских аксессуаров в Санкт-Петербурге.
              </p>
              <p className="mb-6">
                Мы специализируемся на стильных сумках, рюкзаках, кошельках и аксессуарах для мужчин, которые ценят качество и
                современный дизайн. Каждый товар в нашем каталоге тщательно отобран и соответствует актуальным трендам моды.
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icon name="Award" size={40} className="mx-auto mb-4 text-primary" />
                    <h4 className="font-semibold mb-2">Качество</h4>
                    <p className="text-sm text-muted-foreground">Премиальные материалы и проверенные бренды</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icon name="Truck" size={40} className="mx-auto mb-4 text-primary" />
                    <h4 className="font-semibold mb-2">Быстрая доставка</h4>
                    <p className="text-sm text-muted-foreground">По СПб за 1 день, по России за 2-5 дней</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icon name="Shield" size={40} className="mx-auto mb-4 text-primary" />
                    <h4 className="font-semibold mb-2">Гарантия</h4>
                    <p className="text-sm text-muted-foreground">Возврат в течение 14 дней без объяснения причин</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      )}

      {currentPage === 'delivery' && (
        <main className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-bold mb-8">Доставка и оплата</h2>
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Truck" size={28} className="text-primary" />
                    Доставка
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">По Санкт-Петербургу</h4>
                      <p className="text-muted-foreground">Курьерская доставка за 1 день — 350 ₽</p>
                      <p className="text-muted-foreground">Бесплатно при заказе от 5000 ₽</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">По России</h4>
                      <p className="text-muted-foreground">СДЭК, Почта России — от 450 ₽</p>
                      <p className="text-muted-foreground">Доставка 2-5 дней</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Самовывоз</h4>
                      <p className="text-muted-foreground">Бесплатно из нашего магазина в центре СПб</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="CreditCard" size={28} className="text-primary" />
                    Оплата
                  </h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">• Картой онлайн (Visa, MasterCard, МИР)</p>
                    <p className="text-muted-foreground">• СБП (Система быстрых платежей)</p>
                    <p className="text-muted-foreground">• Наличными при получении</p>
                    <p className="text-muted-foreground">• Картой при получении</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      )}

      {currentPage === 'sales' && (
        <main className="py-16">
          <div className="container">
            <h2 className="text-4xl font-bold mb-8">Акции и скидки</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-primary to-orange-600 text-white overflow-hidden">
                <CardContent className="p-8">
                  <Badge className="mb-4 bg-white text-primary">Акция</Badge>
                  <h3 className="text-3xl font-bold mb-4">Скидка 15% на первый заказ</h3>
                  <p className="mb-6 text-white/90">Зарегистрируйтесь и получите промокод на скидку</p>
                  <Button className="bg-white text-primary hover:bg-white/90">Получить промокод</Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary to-purple-600 text-white overflow-hidden">
                <CardContent className="p-8">
                  <Badge className="mb-4 bg-white text-secondary">Распродажа</Badge>
                  <h3 className="text-3xl font-bold mb-4">До -40% на прошлую коллекцию</h3>
                  <p className="mb-6 text-white/90">Успейте купить стильные модели по выгодным ценам</p>
                  <Button className="bg-white text-secondary hover:bg-white/90">Смотреть товары</Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-foreground to-gray-800 text-white overflow-hidden">
                <CardContent className="p-8">
                  <Badge className="mb-4 bg-white text-foreground">Бонусы</Badge>
                  <h3 className="text-3xl font-bold mb-4">Кэшбэк 5%</h3>
                  <p className="mb-6 text-white/90">На все покупки для постоянных клиентов</p>
                  <Button className="bg-white text-foreground hover:bg-white/90">Подробнее</Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white overflow-hidden">
                <CardContent className="p-8">
                  <Badge className="mb-4 bg-white text-orange-600">Доставка</Badge>
                  <h3 className="text-3xl font-bold mb-4">Бесплатная доставка</h3>
                  <p className="mb-6 text-white/90">При заказе от 5000 ₽ по Санкт-Петербургу</p>
                  <Button className="bg-white text-orange-600 hover:bg-white/90">Сделать заказ</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      )}

      {currentPage === 'contacts' && (
        <main className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-bold mb-8">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="MapPin" size={20} className="text-primary" />
                      Адрес магазина
                    </h3>
                    <p className="text-muted-foreground">г. Санкт-Петербург, Невский проспект, д. 28</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Phone" size={20} className="text-primary" />
                      Телефон
                    </h3>
                    <p className="text-muted-foreground">+7 (812) 123-45-67</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Mail" size={20} className="text-primary" />
                      Email
                    </h3>
                    <p className="text-muted-foreground">info@menstyle.ru</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Clock" size={20} className="text-primary" />
                      Время работы
                    </h3>
                    <p className="text-muted-foreground">Пн-Вс: 10:00 - 21:00</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Напишите нам</h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Сообщение"
                        rows={4}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <Button className="w-full">Отправить</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      )}

      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MENSTYLE</h3>
              <p className="text-white/70">Премиальные аксессуары для современных мужчин</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Покупателям</h4>
              <div className="space-y-2">
                <button className="block text-white/70 hover:text-white transition-colors" onClick={() => setCurrentPage('delivery')}>
                  Доставка и оплата
                </button>
                <button className="block text-white/70 hover:text-white transition-colors">Возврат товара</button>
                <button className="block text-white/70 hover:text-white transition-colors">Гарантия</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <div className="space-y-2">
                <button className="block text-white/70 hover:text-white transition-colors" onClick={() => setCurrentPage('about')}>
                  О нас
                </button>
                <button className="block text-white/70 hover:text-white transition-colors" onClick={() => setCurrentPage('contacts')}>
                  Контакты
                </button>
                <button className="block text-white/70 hover:text-white transition-colors" onClick={() => setCurrentPage('sales')}>
                  Акции
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-white hover:text-primary hover:bg-white/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary hover:bg-white/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary hover:bg-white/10">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70">
            <p>© 2024 MENSTYLE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}