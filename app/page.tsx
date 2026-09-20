"use client";

import Image from 'next/image';
import { useRef, useState } from 'react';

export default function Home() {
  const [isAttending, setIsAttending] = useState<boolean>(true);
  const [guestCount, setGuestCount] = useState<1 | 2>(1);
  const rsvpRef = useRef<HTMLElement>(null);

  function quickRsvp(attending: boolean) {
    setIsAttending(attending);
    rsvpRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <main className="min-h-screen pb-20 bg-[#F9F9F7] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-[#F9F9F7] font-sans">
      {/* Top Nav */}
      <nav className="flex justify-between items-center p-6 text-[9px] md:text-xs tracking-[0.2em] uppercase border-b border-black/10">
        <span>Annie & George</span>
        <span>Athens, October 2nd, 2026</span>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col lg:grid lg:grid-cols-2 lg:min-h-[85vh] border-b border-black/10">
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black/10">
          <h1 className="font-serif text-[19vw] lg:text-[7.5vw] leading-[0.85] tracking-tight mb-8 text-[#1A1A1A]">
            <span>Annie</span><br/>
            <span className="italic">& George</span>
          </h1>
          <p className="max-w-md text-sm md:text-lg leading-relaxed text-black/80">
            Yes, it&apos;s remarkably last minute, but we are getting married. No, you don&apos;t need to stress. Just come and party.
          </p>
        </div>
        <div className="relative aspect-[1066/800] lg:aspect-auto lg:h-auto bg-black/5 w-full">
          <Image
            src="/nye-photo.jpg"
            alt="Annie and George"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* Details Section */}
      <section className="flex flex-col lg:grid lg:grid-cols-2 border-b border-black/10">
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center order-1 lg:order-2">
          <div className="grid gap-10">
            <h2 className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-black/40 mb-2 border-b border-black/10 pb-4">The Particulars</h2>

            <div>
              <h3 className="text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase text-black/40 mb-2">When</h3>
              <p className="text-2xl md:text-3xl font-serif">Friday, October 2nd, 2026</p>
            </div>

            <div>
              <h3 className="text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase text-black/40 mb-2">Where</h3>
              <p className="text-2xl md:text-3xl font-serif mb-1">Anassa (Athens City Events)</p>
              <a
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14a1998122356493:0x37932951d08e6f3b?sa=X&ved=1t:8290&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] md:text-xs tracking-widest text-black/60 uppercase hover:text-black transition-colors underline underline-offset-4"
              >
                4 Panagioti Kanellopoulou Ave., Goudi, Athens 115 27
              </a>
            </div>

            <div>
              <h3 className="text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase text-black/40 mb-2">The Evening</h3>
              <p className="text-sm md:text-base leading-relaxed text-black/80">
                Welcome drinks in the garden, dinner and dance until late.
              </p>
            </div>

            <div>
              <h3 className="text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase text-black/40 mb-2">Parking</h3>
              <p className="text-sm md:text-base leading-relaxed text-black/80">
                Valet parking will be available for all our guests at Anassa.
              </p>
            </div>

            <div>
              <h3 className="text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase text-black/40 mb-2">Little Ones</h3>
              <p className="text-sm md:text-base leading-relaxed text-black/80">
                Come and celebrate with us! If you have to join us with your children, please let us know beforehand.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[60vh] lg:h-auto order-2 lg:order-1 bg-black/5 w-full border-t lg:border-t-0 lg:border-r border-black/10">
          <Image
            src="/snow-photo.jpg"
            alt="Annie and George in the snow"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Wedding Party Section */}
      <section className="flex flex-col md:grid md:grid-cols-2 border-b border-black/10">
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-black/10">
          <div className="p-8 md:p-12 text-center border-b border-black/10">
             <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-black/40 mb-2">Best Man</p>
             <h3 className="text-2xl md:text-3xl font-serif">Stefanos Barberopoulos</h3>
          </div>
          <div className="relative aspect-[4/5] bg-black/5 w-full">
             <Image src="/best-man.jpg" alt="Stefanos Barberopoulos" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="p-8 md:p-12 text-center border-b border-black/10">
             <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-black/40 mb-2">Maid of Honor</p>
             <h3 className="text-2xl md:text-3xl font-serif">Theodora Zagoriti</h3>
          </div>
          <div className="relative aspect-[4/5] bg-black/5 w-full">
             <Image src="/maid-of-honor.jpg" alt="Theodora Zagoriti" fill className="object-cover grayscale" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Gifts Section */}
      <section className="p-8 md:p-16 lg:p-24 flex flex-col border-b border-black/10 bg-[#F9F9F7] items-center">
        <h2 className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-black/40 mb-6 border-b border-black/10 pb-4 w-full max-w-3xl text-center">Gifts</h2>

        <p className="text-sm md:text-base leading-relaxed text-black/80 mb-12 max-w-2xl text-center">
          Your presence is the greatest gift to us. For those who have kindly asked, should you wish to contribute towards the beginning of our life together, you may find our bank details below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {/* Revolut Account */}
            <div className="border border-black/10 p-6 md:p-8 bg-white">
                <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-black/40 mb-6 pb-4 border-b border-black/10">Revolut</p>
                <div className="space-y-4 text-sm md:text-base text-left">
                    <div className="flex flex-col gap-1">
                        <span className="text-[9px] md:text-[10px] text-black/50 uppercase tracking-widest font-bold">Beneficiary</span>
                        <span className="font-mono tracking-tight text-xs md:text-sm">G MANSI KONTAXIS & A Koutsimpani</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[9px] md:text-[10px] text-black/50 uppercase tracking-widest font-bold">IBAN</span>
                        <span className="font-mono tracking-tight text-xs md:text-sm">LT64 3250 0666 9681 1305</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[9px] md:text-[10px] text-black/50 uppercase tracking-widest font-bold">BIC / SWIFT</span>
                        <span className="font-mono tracking-tight text-xs md:text-sm">REVOLT21</span>
                    </div>
                </div>
            </div>

            {/* Eurobank Account */}
            <div className="border border-black/10 p-6 md:p-8 bg-white">
                <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-black/40 mb-6 pb-4 border-b border-black/10">Eurobank</p>
                <div className="space-y-4 text-sm md:text-base text-left">
                    <div className="flex flex-col gap-1">
                        <span className="text-[9px] md:text-[10px] text-black/50 uppercase tracking-widest font-bold">Beneficiary</span>
                        <span className="font-mono tracking-tight text-xs md:text-sm">KOUTSIMPANI ANNA-IRIS MANSI-KONTAXIS GEORGIOS</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[9px] md:text-[10px] text-black/50 uppercase tracking-widest font-bold">IBAN</span>
                        <span className="font-mono tracking-tight text-xs md:text-sm">GR3902606400000820200296865</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[9px] md:text-[10px] text-black/50 uppercase tracking-widest font-bold">BIC / SWIFT</span>
                        <span className="font-mono tracking-tight text-xs md:text-sm">ERBKGRAA</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Divider */}
      <section className="relative w-full h-[30vh] md:h-[50vh] border-b border-black/10">
        <Image
          src="/anassa-garden.jpg"
          alt="Anassa Garden"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* RSVP Section */}
      <section ref={rsvpRef} className="flex flex-col lg:grid lg:grid-cols-2 border-b border-black/10 scroll-mt-6">
        <div className="p-8 md:p-16 lg:p-24 flex flex-col items-center justify-center pt-16 border-b lg:border-b-0 lg:border-r border-black/10">
          <h2 className="font-serif text-[25vw] lg:text-[12vw] leading-none tracking-tighter uppercase mb-4">
            RSVP
          </h2>
          <p className="text-[10px] md:text-xs tracking-widest text-black/60 uppercase text-center">
            Kindly respond by Thursday, September 24th
          </p>
        </div>

        <div className="p-8 md:p-16 lg:p-24 flex items-start lg:items-center">
          <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-8 text-sm md:text-base w-full max-w-xl mx-auto">
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            <input type="hidden" name="subject" value="New Wedding RSVP: Annie & George" />

            <input type="hidden" name="Attending" value={isAttending ? 'Yes' : 'No'} />
            <input type="hidden" name="Total Guests" value={isAttending ? guestCount : 0} />

            <div className="flex gap-4 w-full">
              <button
                type="button"
                onClick={() => setIsAttending(true)}
                className={`flex-1 py-4 text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase border transition-colors ${isAttending ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-transparent text-[#1A1A1A] border-black/20 hover:border-black/50'}`}
              >
                I Will Attend
              </button>
              <button
                type="button"
                onClick={() => setIsAttending(false)}
                className={`flex-1 py-4 text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase border transition-colors ${!isAttending ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-transparent text-[#1A1A1A] border-black/20 hover:border-black/50'}`}
              >
                I Will Not Attend
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-black/40">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-transparent border-0 border-b border-black/20 focus:border-black focus:ring-0 rounded-none px-0 py-3 outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-black/40">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-transparent border-0 border-b border-black/20 focus:border-black focus:ring-0 rounded-none px-0 py-3 outline-none transition-colors"
              />
            </div>

            {isAttending && (
              <>
                <div className="flex flex-col gap-4 mt-2">
                  <label className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-black/40">Guests</label>
                  <div className="flex gap-4 w-full">
                    <button
                      type="button"
                      onClick={() => setGuestCount(1)}
                      className={`flex-1 py-4 text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase border transition-colors ${guestCount === 1 ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-transparent text-[#1A1A1A] border-black/20 hover:border-black/50'}`}
                    >
                      Just me
                    </button>
                    <button
                      type="button"
                      onClick={() => setGuestCount(2)}
                      className={`flex-1 py-4 text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase border transition-colors ${guestCount === 2 ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-transparent text-[#1A1A1A] border-black/20 hover:border-black/50'}`}
                    >
                      Me + one guest
                    </button>
                  </div>
                </div>

                {guestCount === 2 && (
                  <div className="flex flex-col gap-2 mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <label htmlFor="plusOneName" className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-black/40">Second Guest&apos;s Name</label>
                    <input
                      type="text"
                      id="plusOneName"
                      name="Plus One Name"
                      required={guestCount === 2}
                      className="w-full bg-transparent border-0 border-b border-black/20 focus:border-black focus:ring-0 rounded-none px-0 py-3 outline-none transition-colors"
                    />
                  </div>
                )}
              </>
            )}

            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="dietary" className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-black/40">Dietary Notes / Requests</label>
              <textarea
                id="dietary"
                name="dietary"
                rows={2}
                className="w-full bg-transparent border-0 border-b border-black/20 focus:border-black focus:ring-0 rounded-none px-0 py-3 outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full bg-[#1A1A1A] text-[#F9F9F7] text-[10px] font-bold uppercase tracking-[0.2em] py-5 hover:bg-black transition-colors rounded-none"
              >
                Submit Response
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-16 md:p-24 flex flex-col items-center justify-center text-center bg-[#F9F9F7]">
        <p className="font-serif italic text-2xl md:text-3xl text-black/80 mb-2">With love,</p>
        <p className="font-serif text-3xl md:text-5xl">Annie & George</p>
      </footer>

      {/* Quick RSVP bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-3 p-3 bg-[#F9F9F7]/95 backdrop-blur-sm border-t border-black/10">
        <button
          type="button"
          onClick={() => quickRsvp(true)}
          className={`flex-1 py-3 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase border transition-colors ${isAttending ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-transparent text-[#1A1A1A] border-black/20 hover:border-black/50'}`}
        >
          I Will Attend
        </button>
        <button
          type="button"
          onClick={() => quickRsvp(false)}
          className={`flex-1 py-3 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase border transition-colors ${!isAttending ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-transparent text-[#1A1A1A] border-black/20 hover:border-black/50'}`}
        >
          I Will Not Attend
        </button>
      </div>
    </main>
  );
}
