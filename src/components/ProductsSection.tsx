import { useState } from "react";
import { Cog, Car, Truck, Wrench, FlaskConical, Flame, ShoppingCart, Package } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const products = [
  {
    icon: Cog,
    title: "Оборудование",
    desc: "Мы обеспечим индивидуальный подбор оборудования для нужд Вашего производства, проверку работоспособности перед отгрузкой в Россию и пуско-наладку на площадке клиента. Подготовим паспорта и документы на русском языке, получим необходимые для импорта сертификаты.",
  },
  {
    icon: Car,
    title: "Автомобили новые и с пробегом",
    desc: "За счёт наличия собственной экспортной компании в провинции Хейлунцзян, обеспечиваем прямые поставки автомобилей из Китая под ключ. Работаем как с новыми моделями от официальных дилеров, так и с проверенными вариантами на вторичном рынке. Проводим комплексную проверку истории и технического состояния, организуем выкуп и доставку. Поможем с растаможкой и прохождением лаборатории для постановки на учет в РФ.",
  },
  {
    icon: Truck,
    title: "Спецтехника",
    desc: "Поставляем надёжную китайскую спецтехнику (экскаваторы, погрузчики, краны, бульдозеры) для строительства, горной добычи и складских работ. Обеспечиваем полное предпродажное обслуживание, сертификацию в соответствии с требованиями ЕАЭС и доставку до объекта.",
  },
  {
    icon: Wrench,
    title: "Запчасти и комплектующие",
    desc: "Оптимизируем снабжение вашего производства запчастями и комплектующими напрямую из Китая и Европы. Работаем с широчайшим спектром позиций: от расходных материалов до редких узлов и агрегатов. Обеспечиваем контроль качества, консолидацию сборных грузов и быструю отправку в Россию.",
  },
  {
    icon: FlaskConical,
    title: "Сырьё",
    desc: "Организуем импорт промышленного сырья из Китая стабильными партиями. Берем на себя контроль качества на всех этапах: от проверки пробы на заводе до лабораторных испытаний готовой партии перед отгрузкой. Работаем с полимерами, химическими компонентами, металлопрокатом и другими видами сырья.",
  },
  {
    icon: Flame,
    title: "Огнеупоры и ферросплавы",
    desc: "Прямые поставки огнеупорных материалов и ферросплавов для металлургических комбинатов. Гарантируем строгое соответствие химического состава и физических свойств заявленным стандартам. Оказываем содействие в подборе марок под технологические процессы вашего производства.",
  },
  {
    icon: ShoppingCart,
    title: "Товары для маркетплейсов",
    desc: "Предлагаем комплексное решение для запуска и пополнения ассортимента на маркетплейсах (Wildberries, Ozon, Яндекс Маркет). Подберем ходовые товары, проведём ребрендинг или поможем с созданием товара под вашим брендом. Берём на себя контроль качества, сертификацию и упаковку.",
  },
  {
    icon: Package,
    title: "Товары народного потребления",
    desc: "Наполним ваш бизнес широким ассортиментом качественных и доступных товаров повседневного спроса из Китая. Работаем с категориями: текстиль, посуда, хозяйственные товары, зоотовары, инвентарь для дома и дачи. Обеспечиваем строгий отбор поставщиков и контроль производственных партий.",
  },
];

const ProductsSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="products" className="py-14 bg-muted">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-12">
          Товары
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="product-card rounded-xl text-left cursor-pointer group"
            >
              <div className="product-card-circle" />
              <p.icon className="product-card-icon" />
              <h3 className="product-card-title">{p.title}</h3>
              <span className="product-card-link">Подробнее</span>
            </button>
          ))}
        </div>

        <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
          {selected !== null && (
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>{products[selected].title}</DialogTitle>
                <DialogDescription className="pt-3 leading-relaxed">
                  {products[selected].desc}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default ProductsSection;
