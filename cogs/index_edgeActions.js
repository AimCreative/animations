/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var i = 1;
         
         $('.button').delay(500).fadeIn(300);
         
         $('.button').hover(function() {
         	$(this).stop().fadeTo(300, 0.5);
         }, function() {
         	$(this).stop().fadeTo(300, 1);
         });
         
         $('.button').on('click', function() {
         	switch(i++) {
         		case 1 :
         			sym.getSymbol("CogAnim1").play();
         			break;
         		case 2:
         			sym.getSymbol("CogAnim2").play();
         			break;
         		case 3:
         			sym.getSymbol("CogAnim3").play();
         			break;
         		case 4:
         			sym.getSymbol("PopAnim1").play();
         			break;
         		case 5:
         			sym.getSymbol("PopAnim2").play();
         			break;
         		case 6:
         			sym.getSymbol("PopAnim3").play();
         			$(this).fadeOut(300).remove();
         			break;
         	}
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'cog'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("cog");
   //Edge symbol end:'cog'

   //=========================================================
   
   //Edge symbol: 'cog2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("cog2");
   //Edge symbol end:'cog2'

   //=========================================================
   
   //Edge symbol: 'mid_pop'
   (function(symbolName) {   
   
   })("mid_pop");
   //Edge symbol end:'mid_pop'

   //=========================================================
   
   //Edge symbol: 'bot_pop'
   (function(symbolName) {   
   
   })("bot_pop");
   //Edge symbol end:'bot_pop'

   //=========================================================
   
   //Edge symbol: 'top_pop'
   (function(symbolName) {   
   
   })("top_pop");
   //Edge symbol end:'top_pop'

   //=========================================================
   
   //Edge symbol: 'button'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("button");
   //Edge symbol end:'button'

   //=========================================================
   
   //Edge symbol: 'CogAnim1'
   (function(symbolName) {   
   
   })("CogAnim1");
   //Edge symbol end:'CogAnim1'

   //=========================================================
   
   //Edge symbol: 'CogAnim2'
   (function(symbolName) {   
   
   })("CogAnim2");
   //Edge symbol end:'CogAnim2'

   //=========================================================
   
   //Edge symbol: 'CogAnim3'
   (function(symbolName) {   
   
   })("CogAnim3");
   //Edge symbol end:'CogAnim3'

   //=========================================================
   
   //Edge symbol: 'PopAnim3'
   (function(symbolName) {   
   
   })("PopAnim3");
   //Edge symbol end:'PopAnim3'

   //=========================================================
   
   //Edge symbol: 'PopAnim2'
   (function(symbolName) {   
   
   })("PopAnim2");
   //Edge symbol end:'PopAnim2'

   //=========================================================
   
   //Edge symbol: 'PopAnim1'
   (function(symbolName) {   
   
   })("PopAnim1");
   //Edge symbol end:'PopAnim1'

})(jQuery, AdobeEdge, "EDGE-8295068");