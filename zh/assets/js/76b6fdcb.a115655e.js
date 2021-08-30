(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return c}));var r=a(3),n=a(7),i=(a(0),a(96)),o={id:"glossary",title:"\u8a5e\u5f59\u8868",sidebar_label:"\u8a5e\u5f59\u8868",slug:"/glossary"},s={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"\u8a5e\u5f59\u8868",description:"\u671f\u6b0a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/glossary.md",slug:"/glossary",permalink:"/zh/glossary",editUrl:"https://github.com/mithraiclabs/psyoptions-docs/tree/master/docs/glossary.md",version:"current",sidebar_label:"\u8a5e\u5f59\u8868",sidebar:"someSidebar",previous:{title:"\u9858\u666f",permalink:"/zh/mission"},next:{title:"\u671f\u6b0a\u7b56\u7565",permalink:"/zh/options-strategies"}},l=[{value:"The Greeks",id:"the-greeks",children:[]},{value:"\u671f\u6b0a\u7b56\u7565",id:"\u671f\u6b0a\u7b56\u7565",children:[]}],p={toc:l};function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"\u671f\u6b0a"},"\u671f\u6b0a"),Object(i.b)("p",null,"An option is a contract that gives the owner the right to buy (in the case of a ",Object(i.b)("a",{parentName:"p",href:"#call"},"call"),") or sell (in the case of a ",Object(i.b)("a",{parentName:"p",href:"#put"},"put"),") a number of the ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," at a predetermined price (",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"strike price"),") on or before a fixed ",Object(i.b)("a",{parentName:"p",href:"#expiration"},"expiration")," date."),Object(i.b)("h4",{id:"\u770b\u6f32"},"\u770b\u6f32"),Object(i.b)("p",null,"Buyers of call options generally expect the ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," to increase in value, whereas sellers of calls expect a decrease in value or for the value to remain the same."),Object(i.b)("p",null,"Buying a call gives you the right, but not the obligation, to buy the ",Object(i.b)("a",{parentName:"p",href:"#contract-size"},"contract size")," amount of the underlying asset at the option's ",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"strike price"),". The value of a call option should increase as the price of the underlying asset increases."),Object(i.b)("p",null,"Writing a ",Object(i.b)("a",{parentName:"p",href:"#covered-call"},"covered call")," option allows you to collect the premium while obligating you to sell the contract size amount of the underlying asset to the owner at the agreed-upon strike price if the owner of the contract chooses to exercise the contract."),Object(i.b)("h4",{id:"\u770b\u8dcc"},"\u770b\u8dcc"),Object(i.b)("p",null,"Buyers of put options generally expect the ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," to decrease in value, whereas sellers of puts expect an increase in value or for the value to remain the same."),Object(i.b)("p",null,"\u8cfc\u8cb7\u770b\u8dcc\u671f\u6b0a\u8ce6\u4e88\u4f60\u4ee5\u671f\u6b0a\u7684\u57f7\u884c\u50f9\u683c\u51fa\u552e",Object(i.b)("a",{parentName:"p",href:"#contract-size"},"\u5408\u7d04\u5927\u5c0f"),"\u6578\u91cf\u7684\u6a19\u7684\u8cc7\u7522\u7684\u6b0a\u5229\uff0c\u4f46\u6c92\u6709\u7fa9\u52d9\u3002 The value of the put option should increase as the price of the underlying asset decreases."),Object(i.b)("p",null,"Writing a ",Object(i.b)("a",{parentName:"p",href:"#secured-put"},"secured put")," option allows you to collect the premium while obligating you to buy a contract size amount of the underlying asset from the owner at the agreed-upon strike price if the owner of the contract chooses to exercise the contract."),Object(i.b)("h4",{id:"\u63a9\u8b77\u6027\u770b\u6f32\u671f\u6b0a-covered-call"},"\u63a9\u8b77\u6027\u770b\u6f32\u671f\u6b0a (Covered Call)"),Object(i.b)("p",null,"An option strategy executed by selling a call option while holding the same ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset"),". This strategy is generally used if you expect the underlying asset price to stay relatively flat or increase moderately. \u4f8b\u5982: \u4f60\u5c07\u9444\u9020/\u51fa\u552e 1 \u500b SOL/USDC \u770b\u6f32\u671f\u6b0a\uff0c\u540c\u6642\u9396\u5b9a 100 \u500b SOL \u4f5c\u70ba ",Object(i.b)("a",{parentName:"p",href:"#contract-size"},"\u5408\u7d04\u5927\u5c0f")," \u70ba 100 \u7684\u770b\u6f32\u671f\u6b0a\u7684\u62b5\u62bc\u54c1\u3002"),Object(i.b)("h4",{id:"\u64d4\u4fdd\u770b\u8dcc\u671f\u6b0a-secured-put"},"\u64d4\u4fdd\u770b\u8dcc\u671f\u6b0a (Secured Put)"),Object(i.b)("p",null,"An option strategy composed of selling a ",Object(i.b)("a",{parentName:"p",href:"#put"},"put")," option while retaining enough cash to purchase the ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," if the option contract is executed by it's buyer. This strategy is generally used if you are bearish on an asset short term, but bullish long term. \u4f8b\u5982: \u4f60\u5c07\u9444\u9020/\u51fa\u552e 1 \u500b SOL/USDC \u770b\u8dcc\u671f\u6b0a\uff0c\u540c\u6642\u9396\u5b9a 4000\uff08\u57f7\u884c\u50f9\u683c * \u5408\u7d04\u5927\u5c0f\uff09USDC \u4f5c\u70ba 40 \u7684",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"\u57f7\u884c\u50f9\u683c"),"\u7684\u770b\u8dcc\u671f\u6b0a\u7684\u62b5\u62bc\u54c1\uff0c\u4e26\u4e14",Object(i.b)("a",{parentName:"p",href:"#contract-size"},"\u5408\u7d04\u5927\u5c0f")," \u70ba 100\u3002"),Object(i.b)("h4",{id:"\u6a19\u7684\u8cc7\u7522"},"\u6a19\u7684\u8cc7\u7522"),Object(i.b)("p",null,"\u5728\u7de8\u5beb\u64d4\u4fdd\u770b\u8dcc\u671f\u6b0a\u6642\u9396\u5b9a\u7684\u8cc7\u7522\uff0c\u6216\u57f7\u884c\u63a9\u8b77\u6027\u770b\u6f32\u671f\u6b0a\u6642\u63a5\u6536\u7684\u8cc7\u7522\u3002"),Object(i.b)("h4",{id:"\u5f15\u7528\u8cc7\u7522"},"\u5f15\u7528\u8cc7\u7522"),Object(i.b)("p",null,"\u7528\u4f86\u70ba\u6a19\u7684\u8cc7\u7522\u5b9a\u50f9\u7684\u8cc7\u7522\u3002"),Object(i.b)("h4",{id:"\u5408\u7d04\u5927\u5c0f"},"\u5408\u7d04\u5927\u5c0f"),Object(i.b)("p",null,"\u671f\u6b0a\u6301\u6709\u4eba\u53ef\u4ee5\u884c\u4f7f\u6a19\u7684\u8cc7\u7522\u7684\u6578\u91cf\u3002 \u6216\u63db\u53e5\u8a71\u8aaa\uff0c\u5beb\u4e00\u500b\u63a9\u8b77\u6027\u770b\u6f32\u671f\u6b0a\u6642\u9700\u8981\u9396\u5b9a\u591a\u5c11\u6a19\u7684\u8cc7\u7522\u3002"),Object(i.b)("h4",{id:"\u51fa\u50f9"},"\u51fa\u50f9"),Object(i.b)("p",null,"\u8cb7\u65b9\u9858\u610f\u8cfc\u8cb7\u671f\u6b0a\u7684\u50f9\u683c\uff0c\u4e5f\u662f\u8ce3\u65b9\u53ef\u4ee5\u7acb\u5373\u8ce3\u51fa\u671f\u6b0a\u7684\u50f9\u683c\u3002"),Object(i.b)("h4",{id:"\u554f\u50f9"},"\u554f\u50f9"),Object(i.b)("p",null,"\u8ce3\u65b9\u9858\u610f\u51fa\u552e\u671f\u6b0a\u7684\u50f9\u683c\uff0c\u4e5f\u662f\u8cb7\u65b9\u53ef\u4ee5\u7acb\u5373\u8cfc\u8cb7\u671f\u6b0a\u7684\u50f9\u683c\u3002"),Object(i.b)("h4",{id:"\u884c\u6b0a\u50f9"},"\u884c\u6b0a\u50f9"),Object(i.b)("p",null,"\u884c\u6b0a\u8005\u53ef\u4ee5\u5c07\u5f15\u7528\u8cc7\u7522\u63db\u6210\u9396\u5b9a\u7684",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"\u6a19\u7684\u8cc7\u7522"),"\u7684\u50f9\u683c\u3002"),Object(i.b)("h4",{id:"\u5230\u671f"},"\u5230\u671f"),Object(i.b)("p",null,"\u53ef\u4ee5\u884c\u4f7f\u671f\u6b0a\u7684\u6700\u5f8c\u65e5\u671f\u3002"),Object(i.b)("h4",{id:"\u884c\u6b0a"},"\u884c\u6b0a"),Object(i.b)("p",null,"\u884c\u6b0a\u662f\u6307\u8cb7\u8ce3\u671f\u6b0a\u5408\u7d04\u4e2d\u898f\u5b9a\u7684",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"\u6a19\u7684\u8cc7\u7522"),"\u7684\u6b0a\u5229\u751f\u6548\u3002 \u7576\u770b\u6f32\u671f\u6b0a\u6301\u6709\u8005\u884c\u4f7f\u4ed6\u5011\u7684\u5408\u7d04\u6642\uff0c\u4ed6\u5011\u5c07\u6309\u7167\u7d04\u5b9a\u7684",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"\u884c\u6b0a\u50f9"),"\u5f9e\u671f\u6b0a\u8ce3\u5bb6\u90a3\u88e1\u8cfc\u8cb7\u6a19\u7684\u8cc7\u7522\u3002 \u7576\u770b\u8dcc\u671f\u6b0a\u6301\u6709\u8005\u884c\u4f7f\u4ed6\u5011\u7684\u5408\u7d04\u6642\uff0c\u4ed6\u5011\u5c07\u4ee5\u7d04\u5b9a\u7684\u57f7\u884c\u50f9\u683c\u5c07\u6a19\u7684\u8cc7\u7522\u51fa\u552e\u7d66\u671f\u6b0a\u8ce3\u65b9\u3002"),Object(i.b)("h4",{id:"\u96b1\u542b\u6ce2\u52d5\u7387-iv"},"\u96b1\u542b\u6ce2\u52d5\u7387 (IV)"),Object(i.b)("p",null,"\u96b1\u542b\u6ce2\u52d5\u7387 (IV) \u662f\u5c0d\u6a19\u7684\u8cc7\u7522\u6ce2\u52d5\u7387\u7684\u4f30\u8a08\uff0c\u6b64\u6ce2\u52d5\u7387\u6e90\u81ea\u671f\u6b0a\u7684\u5e02\u5834\u50f9\u503c\u3002 It is essentially the market's forecast of a likely movement in an underlying asset's price."),Object(i.b)("h4",{id:"in-the-money"},"In the Money"),Object(i.b)("p",null,"An In the Money(ITM) option is one with a ",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"strike price")," that has already been surpassed by the price of the ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset"),"."),Object(i.b)("h4",{id:"out-of-the-money"},"Out of the Money"),Object(i.b)("p",null,"An Out of the Money(OTM) option is one with a ",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"strike price")," that the price of the ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," has yet to reach."),Object(i.b)("h4",{id:"at-the-money"},"At the Money"),Object(i.b)("p",null,"An At the Money(ATM) option is one with a ",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"strike price")," that is equal to the current price of the ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset"),"."),Object(i.b)("h3",{id:"the-greeks"},"The Greeks"),Object(i.b)("h4",{id:"beta"},"Beta"),Object(i.b)("p",null,"Beta is a measure of the volatility of an asset compared to the overall market. In addition to being a measure of the volatility of an asset compared to the overall market, beta can also be used to assess the risk of a coin in comparison to a benchmark."),Object(i.b)("p",null,"Example: If you took the entire crypto market and compared it against itself you would get a beta value of 1. However, if you take a specific coin such as SOL and compare it against the crypto market, you will likely get a beta value that is higher or lower than 1."),Object(i.b)("p",null,"Beta values higher than 1 indicate that a coin is more volatile than the overall market while also being correlated to the overall market. On the other hand, beta values lower than 1 indicate that a coin is less volatile in comparison to the market, or that it is not correlated to the market."),Object(i.b)("h4",{id:"delta"},"Delta"),Object(i.b)("p",null,"Delta measures an option's sensitivity to a change in price of the ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset"),". Delta is measuring the rate of change between the option\u2019s price and a $1 change in the underlying asset's price."),Object(i.b)("p",null,"Example: A delta of 0.40 means that in theory, the option's price will move $0.40 for every $1 move in the underlying asset's price."),Object(i.b)("p",null,"Delta can be a number between -1 and 1, depending on the type of contract. ",Object(i.b)("a",{parentName:"p",href:"#call"},"Call")," options can range from 0 to 1, while ",Object(i.b)("a",{parentName:"p",href:"#put"},"put")," options can range from -1 to 0."),Object(i.b)("h4",{id:"gamma"},"Gamma"),Object(i.b)("p",null,"Gamma is the rate of change in an option's ",Object(i.b)("a",{parentName:"p",href:"#delta"},"delta")," per 1 point move in the ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," price. When an option's price is deep ",Object(i.b)("a",{parentName:"p",href:"#in-the-money"},"ITM")," or ",Object(i.b)("a",{parentName:"p",href:"#out-of-the-money"},"OTM"),", it's gamma is near zero. When the option's price is ",Object(i.b)("a",{parentName:"p",href:"#at-the-money"},"ATM"),", it's gamma is large. All long options have a positive gamma, while all short options have a negative gamma."),Object(i.b)("h4",{id:"vega"},"Vega"),Object(i.b)("p",null,"Vega measures an options sensitivity to ",Object(i.b)("a",{parentName:"p",href:"#iv"},"implied volatility"),"."),Object(i.b)("p",null,"Example: The value of an option is 5.00, implied volatility is at 20, and the option has a vega of .12. If implied volatility moved to 21.5, the option's price would increase by 1.5 x .12 = .18 making the new value 5.18."),Object(i.b)("h4",{id:"theta"},"Theta"),Object(i.b)("p",null,"Theta, also known as time decay, is an option's sensitivity to time. It is the amount your option's value decreases as it gets closer to it's ",Object(i.b)("a",{parentName:"p",href:"#expiration"},"expiration")," date. Theta is typically represented as a negative number because once you purchase an option and time starts to move towards the expiration date, the potential for the option to be profitable begins to decrease."),Object(i.b)("p",null,'However, when you sell an option, theta usually increases. This is because as a seller of an option, it is typically more beneficial to you if the option expires without being exercised. This is why selling options are often referred to as "postive theta trades".'),Object(i.b)("h3",{id:"\u671f\u6b0a\u7b56\u7565"},"\u671f\u6b0a\u7b56\u7565"),Object(i.b)("h4",{id:"bull-call-spread"},"Bull Call Spread"),Object(i.b)("p",null,"A Bull Call Spread is an option strategy that you can utilize if you think the price of the ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," will go up, but not by much. To execute this strategy, you use two call options to form a price range with a lower and higher ",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"strike price"),"."),Object(i.b)("p",null,"To start, purchase a ",Object(i.b)("a",{parentName:"p",href:"#call"},"call")," with a ",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"strike price")," that is higher than the current market price of the ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset"),". Then, sell a ",Object(i.b)("a",{parentName:"p",href:"#call"},"call")," with a ",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"strike price")," that is even higher than the strike price of the call you purchased with the same ",Object(i.b)("a",{parentName:"p",href:"#expiration"},"expiration")," date. Selling this ",Object(i.b)("a",{parentName:"p",href:"#call"},"call")," helps offset the cost of purchasing the original call."),Object(i.b)("p",null,"When executing this strategy, your losses are limited to the net cost of creating the spread, but this also limits your potential gains. Typically this strategy is executed during times of high market volatility."),Object(i.b)("h4",{id:"bear-put-spread"},"Bear Put Spread"),Object(i.b)("p",null,"The Bear Put Spread can be used when you are expecting a moderate to significant drop in an asset\u2019s price, and you want to reduce the cost and risk associated with your trade. Similar to the ",Object(i.b)("a",{parentName:"p",href:"#bull-call-spread"},"Bull Call Spread"),", this strategy is achieved by using two separate ",Object(i.b)("a",{parentName:"p",href:"#put"},"put")," options."),Object(i.b)("p",null,"To execute this trade, you would purchase a ",Object(i.b)("a",{parentName:"p",href:"#put"},"put")," option while also selling a put option with the same ",Object(i.b)("a",{parentName:"p",href:"#expiration"},"expiration")," date at a lower ",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"strike price"),". Selling the ",Object(i.b)("a",{parentName:"p",href:"#put"},"put")," option with the lower ",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"strike price")," helps cover some of the premium you paid when purchasing the initial put. You\u2019re also greatly reducing your risk as the risk is limited to the cost of setting up the spread."),Object(i.b)("p",null,"This strategy allows you to profit from the price of the ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," going down while not exposing you to the theoretically unlimited loss that can occur when short selling."),Object(i.b)("h4",{id:"protective-collar"},"Protective Collar"),Object(i.b)("p",null,"When market volatility picks up drastically, and you\u2019re not sure what\u2019s going to happen, you can utilize this strategy. With this strategy you can protect yourself from short term downside losses, while also retaining the ability to make money if price goes up."),Object(i.b)("p",null,"If you hold the ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset"),", and want to protect this position from a potentially drastic sell off, you would first purchase an ",Object(i.b)("a",{parentName:"p",href:"#out-of-the-money"},"OTM")," ",Object(i.b)("a",{parentName:"p",href:"#put"},"put"),". Then, you would sell an ",Object(i.b)("a",{parentName:"p",href:"#out-of-the-money"},"OTM")," ",Object(i.b)("a",{parentName:"p",href:"#call"},"call")," with the same ",Object(i.b)("a",{parentName:"p",href:"#expiration"},"expiration")," date as the ",Object(i.b)("a",{parentName:"p",href:"#put"},"put")," you purchased."),Object(i.b)("p",null,"Writing the ",Object(i.b)("a",{parentName:"p",href:"#call"},"call")," option essentially pays for the ",Object(i.b)("a",{parentName:"p",href:"#put"},"put"),", and in theory you could even end up with a net gain using this strategy. This sound like a no brainer way to protect your position, but there is one major drawback. If price doesn\u2019t go down, and instead surges upwards past the written call's ",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"strike price"),", you\u2019ll be forced to sell your ",Object(i.b)("a",{parentName:"p",href:"#underlying-asset"},"underlying asset")," to the purchaser of the ",Object(i.b)("a",{parentName:"p",href:"#call"},"call")," option."),Object(i.b)("h4",{id:"long-straddle"},"Long Straddle"),Object(i.b)("p",null,"This strategy is typically used when traders expect a news event to move the price of a particular asset. To execute this strategy, you would purchase both a ",Object(i.b)("a",{parentName:"p",href:"#call"},"call")," and a ",Object(i.b)("a",{parentName:"p",href:"#put"},"put")," with the same ",Object(i.b)("a",{parentName:"p",href:"#expiration"},"expiration")," date and ",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"strike price"),". Since the strike price is ",Object(i.b)("a",{parentName:"p",href:"#at-the-money"},"ATM")," or close to it, small moves in either direction are essentially canceled out."),Object(i.b)("p",null,"While this strategy can be a useful way to prepare yourself for a potentially large move in price, it does have downsides. The market may not react to this event at all, and also, you are not the only person aware of this event. Options sellers will increase their premiums because of this event, making this an expensive strategy to execute."),Object(i.b)("p",null,"Due to the expensive nature of this strategy, it is cheaper and arguably better to simply bet on one direction. This decision is of course up to the trader. Considering that the potential profit is unlimited, and the potential loss is limited, it may be worth it."),Object(i.b)("h4",{id:"long-strangle"},"Long Strangle"),Object(i.b)("p",null,"This strategy is nearly identical to the ",Object(i.b)("a",{parentName:"p",href:"#long-straddle"},"Long Straddle")," strategy except for two key differences. Rather than purchasing an ",Object(i.b)("a",{parentName:"p",href:"#at-the-money"},"ATM")," ",Object(i.b)("a",{parentName:"p",href:"#call"},"call")," and an ATM ",Object(i.b)("a",{parentName:"p",href:"#put"},"put"),", you would purchase an ",Object(i.b)("a",{parentName:"p",href:"#out-of-the-money"},"OTM")," call and an OTM put. Also, rather than having the same ",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"strike price"),", the call and put you purchase for this strategy will have different strike prices. They will still have the same ",Object(i.b)("a",{parentName:"p",href:"#expiration"},"expiration")," date."),Object(i.b)("p",null,"Purchasing an ",Object(i.b)("a",{parentName:"p",href:"#out-of-the-money"},"OTM")," ",Object(i.b)("a",{parentName:"p",href:"#call"},"call")," and an OTM ",Object(i.b)("a",{parentName:"p",href:"#put"},"put")," makes this strategy cheaper to execute than a Long Straddle, however, it is considered rikiser because price will have to an even larger amount to be profitable."),Object(i.b)("h4",{id:"long-call-butterfly-spread"},"Long Call Butterfly Spread"),Object(i.b)("p",null,"In general, Butterfly Spreads are strategies that utilize both bull spreads and bear spreads to generate a market neutral strategy with fixed risk and profit. These strategies utilize four option contracts that all have the same ",Object(i.b)("a",{parentName:"p",href:"#expiration"},"expiration")," date, with three equidistant ",Object(i.b)("a",{parentName:"p",href:"#strike-price"},"strike prices"),". The Long Call Butterfly Spread is essentially a combination of a ",Object(i.b)("a",{parentName:"p",href:"#bull-call-spread"},"bull call spread")," and a bear call spread."),Object(i.b)("p",null,"To set up a Long Call Butterfly spread, first you would buy a ",Object(i.b)("a",{parentName:"p",href:"#call"},"call")," at strike price A. Then sell two calls at strike price B. Finally, you would purchase one last call at strike price C."),Object(i.b)("p",null,"The sweet spot for this set up is if the asset is at strike B upon expiration. This makes your max potential profit from this strategy strike B minus strike A minus the net debit paid. Your max potential loss is simply the cost to set up the spread. Your two break even points are at strike price A plus the net debit paid, and strike price C minus the net debit paid."),Object(i.b)("p",null,"Since you are managing four separate contracts with three different strike prices, we would only recommend this strategy once you are a more seasoned options trader."))}c.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),c=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(a),u=r,d=h["".concat(o,".").concat(u)]||h[u]||b[u]||i;return a?n.a.createElement(d,s(s({ref:t},p),{},{components:a})):n.a.createElement(d,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);