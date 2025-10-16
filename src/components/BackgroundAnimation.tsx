const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
      <div className="absolute top-[10%] left-[5%] float-animation-1 text-8xl">🥭</div>
      <div className="absolute top-[20%] right-[10%] float-animation-2 text-7xl">💰</div>
      <div className="absolute top-[40%] left-[15%] float-animation-3 text-6xl font-bold text-primary">2%</div>
      <div className="absolute top-[60%] right-[20%] float-animation-4 text-7xl">🏦</div>
      <div className="absolute bottom-[20%] left-[25%] float-animation-5 text-8xl">🥭</div>
      <div className="absolute bottom-[30%] right-[15%] float-animation-6 text-6xl">💳</div>
      <div className="absolute top-[70%] left-[40%] float-animation-1 text-7xl">🔑</div>
      <div className="absolute top-[15%] right-[30%] float-animation-2 text-6xl font-bold text-accent">6%</div>
      <div className="absolute bottom-[40%] left-[60%] float-animation-3 text-7xl">🥭</div>
      <div className="absolute top-[50%] right-[5%] float-animation-4 text-6xl">💵</div>
      <div className="absolute bottom-[15%] left-[70%] float-animation-5 text-7xl">🏠</div>
      <div className="absolute top-[80%] right-[40%] float-animation-6 text-6xl font-bold text-primary">3%</div>
    </div>
  );
};

export default BackgroundAnimation;
