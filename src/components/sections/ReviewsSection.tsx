import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Review {
  id: string;
  name: string;
  initials: string;
  rating: number;
  date: string;
  preview: string;
  full: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-orange-50/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-muted-foreground">
            Реальные истории людей, которым мы помогли получить ипотеку
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-2 hover:border-primary transition-all">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shrink-0">
                  {currentReview.initials}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl">{currentReview.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex gap-0.5 text-yellow-500">
                      {Array.from({ length: currentReview.rating }).map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{currentReview.date}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {expandedReviews[currentReview.id] ? currentReview.full : currentReview.preview}
              </p>
              
              {currentReview.preview !== currentReview.full && (
                <Button 
                  variant="link" 
                  className="mt-2 p-0 h-auto text-primary"
                  onClick={() => setExpandedReviews(prev => ({
                    ...prev,
                    [currentReview.id]: !prev[currentReview.id]
                  }))}
                >
                  {expandedReviews[currentReview.id] ? 'Скрыть' : 'Читать полностью'}
                </Button>
              )}
            </CardContent>
          </Card>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevReview}
              className="shrink-0 hover:bg-primary hover:text-white transition-all"
            >
              <Icon name="ChevronLeft" size={24} />
            </Button>
            
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentReviewIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextReview}
              className="shrink-0 hover:bg-primary hover:text-white transition-all"
            >
              <Icon name="ChevronRight" size={24} />
            </Button>
          </div>

          <div className="text-center space-y-6 mt-12">
            <p className="text-lg opacity-80">Читайте все отзывы наших клиентов на популярных платформах:</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2 hover:bg-primary hover:text-white transition-all w-full sm:w-auto"
                onClick={() => window.open('https://go.2gis.com/bq5Fb', '_blank')}
              >
                <Icon name="MapPin" size={20} />
                Отзывы на 2ГИС
                <Icon name="ExternalLink" size={16} />
              </Button>

              <Button 
                size="lg" 
                variant="outline"
                className="gap-2 hover:bg-primary hover:text-white transition-all w-full sm:w-auto"
                onClick={() => window.open('https://www.vl.ru/mango-dom', '_blank')}
              >
                <Icon name="MessageSquare" size={20} />
                Отзывы на VL.ru
                <Icon name="ExternalLink" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
