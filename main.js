//  animatedクラスを持つ要素が画面内に入ったら
//  Animate.cssのfadeOutUpエフェクトを適用

$('.animated').waypoint({
 handler(direction) {
   /**要素が画面中央に来るとここが実行される
   */
   
   if (direction === 'down') {
   /**下方へスクロール
    * イベント発生元の要素にfadeInUpクラスを付けることで
    * アニメーション開始
    */
     console.log('downが実行された');
     $(this.element).addClass('fadeInUp');
     console.log(this.element);
     console.log('fadeInUpが実行された');
     $(this.element).removeClass('fadeOutUp');
     console.log('fadeOutUpが解除された')
    }
  else if(direction == 'up') {
     console.log('upが実行された');
     $(this.element).addClass('fadeOutUp');
     console.log(this.element);
     console.log('fadeOutUpが実行された')
     $(this.element).removeClass('fadeInUp');
     console.log('fadeInUpが解除された')
   }
    /**
     * waypointを削除することで、この要素に対しては
     * これ以降handlerが呼ばれなくなる
     */
    // this.destroy();
 },
 /**
  * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
  * 50%画面中央に来たらhandlerを実行
  */
  offset: '80%', 
});
$('.animated').removeClass('fadeInUp fadeOutUp');