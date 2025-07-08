import Image from "next/image";

interface BrandAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
}

const brandAssets: BrandAsset[] = [
  // AI Brain Assets
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/3a69ae0b35b60f1582f11f58428b9ec8f1b8009e?width=4242",
    alt: "AI Brain Logo",
    width: 2121,
    height: 1414,
    category: "brain",
  },

  // Main Saint Visional Logos
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/b9b9d2b1f5de927ef77bc69be517f68b048d480b?width=3072",
    alt: "Saint Visional Transparent Logo",
    width: 1536,
    height: 1024,
    category: "main",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/fbd33edd6e28604e92aceac270a8cbed0bee6e04?width=3072",
    alt: "High Resolution Logo",
    width: 1536,
    height: 1024,
    category: "main",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/c5b9665d967b374dc9489f5e945ae1a9f3863334?width=3072",
    alt: "Side Logo",
    width: 1536,
    height: 1024,
    category: "main",
  },

  // Cooking Knowledge Variants
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/5253297015b22d04d9f1e33580c50bc67066a513?width=2048",
    alt: "Cookin Logo",
    width: 1024,
    height: 1024,
    category: "cooking",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/dbd66d248fb8df6b83fafb438b6cd10bb298b07b?width=2048",
    alt: "Cookin Transparent Logo",
    width: 1024,
    height: 1024,
    category: "cooking",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/daed85e42b26c261b327f07c3325ff47fa346ce5?width=2048",
    alt: "Different Cookin Knowledge",
    width: 1024,
    height: 1024,
    category: "cooking",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/f11b78a7633536a0fd13f522f98e2af1f61e14e1?width=2048",
    alt: "The Best Main Logo + Cookin",
    width: 1024,
    height: 1024,
    category: "cooking",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/0e3da8c87ef0a2ce4d28c60e995e172227664738?width=3072",
    alt: "Transparent Saint Visional Cookin Knowledge",
    width: 1536,
    height: 1024,
    category: "cooking",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/470eeb657acfbfd689bed47c742d1d9c5f61f853?width=2048",
    alt: "Transparent SV Cooking Knowledge Side by Side",
    width: 1024,
    height: 1024,
    category: "cooking",
  },

  // Square Variants
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/6e27fcd8b1f6a56d9414092eaa9abe60add7970a?width=2048",
    alt: "SV Black and Gold Square Inside Cookin",
    width: 1024,
    height: 1024,
    category: "square",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/afae05e1799b2ae6dbd17bbab46f6d44fa48815b?width=2048",
    alt: "Side Logo 2",
    width: 1024,
    height: 1024,
    category: "square",
  },

  // Brain Variants
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/7bdcd88c077c8db5807a5835557309d449b88def?width=2048",
    alt: "Saint Brain",
    width: 1024,
    height: 1024,
    category: "brain",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/36cbc33604dfda023f1d8ad183d98bfb1d9231cb?width=2048",
    alt: "Saint Small Good Brain",
    width: 1024,
    height: 1024,
    category: "brain",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/d02affb61148d6205aeecdb9b090255424e962f6?width=2048",
    alt: "The Side Transparent",
    width: 1024,
    height: 1024,
    category: "brain",
  },

  // Backgrounds and Large Assets
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/5d704518ad75945d57b53a341c9ff6f6fcdb01c6?width=4096",
    alt: "The Best Slide Background",
    width: 2048,
    height: 1358,
    category: "background",
  },

  // Favicon Collection
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/e49981112610352c2823b65d550c39e55da696ff?width=32",
    alt: "Favicon 16x16",
    width: 16,
    height: 16,
    category: "favicon",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/0caeaed079f38942f8e2b6afa13212c50c30f2d6?width=64",
    alt: "Favicon 32x32",
    width: 32,
    height: 32,
    category: "favicon",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/3d9a3537f7d8ae016c2e0a216a3064bafa07275b?width=96",
    alt: "Favicon 48x48",
    width: 48,
    height: 48,
    category: "favicon",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/1cbe69ad8808d0c085ad5b8ed0dc6de72e4de25e?width=128",
    alt: "Favicon 64x64",
    width: 64,
    height: 64,
    category: "favicon",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/e4ca0375b21adc78295bdbce0581ad09c1f55ca0?width=256",
    alt: "Favicon 128x128",
    width: 128,
    height: 128,
    category: "favicon",
  },
];

interface BrandShowcaseProps {
  title?: string;
  showCategories?: boolean;
  columns?: number;
}

export function BrandShowcase({
  title = "Saint Visional Brand Assets",
  showCategories = true,
  columns = 4,
}: BrandShowcaseProps) {
  const categories = [...new Set(brandAssets.map((asset) => asset.category))];

  const getCategoryAssets = (category: string) =>
    brandAssets.filter((asset) => asset.category === category);

  const CategorySection = ({ category }: { category: string }) => {
    const assets = getCategoryAssets(category);

    return (
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 capitalize text-foreground">
          {category === "main"
            ? "Main Logos"
            : category === "cooking"
              ? "Cooking Knowledge"
              : category === "brain"
                ? "Brain & AI"
                : category === "square"
                  ? "Square Variants"
                  : category === "favicon"
                    ? "Favicons"
                    : category === "background"
                      ? "Backgrounds"
                      : category}
        </h3>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${columns} gap-6`}
        >
          {assets.map((asset, index) => (
            <div
              key={`${category}-${index}`}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-square flex items-center justify-center p-4 bg-gradient-to-br from-background to-muted">
                <Image
                  src={asset.src}
                  alt={asset.alt}
                  width={asset.width}
                  height={asset.height}
                  className="object-contain max-w-full max-h-full group-hover:scale-105 transition-transform duration-300"
                  priority={category === "main" && index < 2}
                />
              </div>
              <div className="p-4 bg-card">
                <p className="text-sm font-medium text-card-foreground line-clamp-2">
                  {asset.alt}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {asset.width} × {asset.height}px
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const AllAssetsGrid = () => (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${columns} xl:grid-cols-5 gap-6`}
    >
      {brandAssets.map((asset, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300"
        >
          <div className="relative aspect-square flex items-center justify-center p-4 bg-gradient-to-br from-background to-muted">
            <Image
              src={asset.src}
              alt={asset.alt}
              width={asset.width}
              height={asset.height}
              className="object-contain max-w-full max-h-full group-hover:scale-105 transition-transform duration-300"
              priority={index < 8}
            />
          </div>
          <div className="p-4 bg-card">
            <p className="text-sm font-medium text-card-foreground line-clamp-2">
              {asset.alt}
            </p>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full capitalize">
                {asset.category}
              </span>
              <p className="text-xs text-muted-foreground">
                {asset.width} × {asset.height}px
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Complete collection of Saint Visional brand assets, logos, and visual
          identity elements
        </p>
      </div>

      {showCategories ? (
        <div className="space-y-16">
          {categories.map((category) => (
            <CategorySection key={category} category={category} />
          ))}
        </div>
      ) : (
        <AllAssetsGrid />
      )}
    </div>
  );
}

export default BrandShowcase;
