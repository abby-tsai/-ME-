
// ====== feather icons
feather.replace({ width: '1em', height: '1em' })
// end

const App = {
  data() {
    return {

      isOpen: false,

      protein: '',
      fat: '',
      fiber: '',
      water: '',
      ash: '',
      carbohydrate: 0,
      me: 0,

      me_protein: 0,
      me_fat: 0,
      me_carbohydrate: 0,

      me_protein_result: '',
      me_fat_result: '',
      me_carbohydrate_result: '',

      protein_colorClass: [],
      fat_colorClass: [],
      carbohydrate_colorClass: [],
      colors: ['red', 'blue', 'green'],

    }
  },
  methods: {

    reset() {
      // 關閉結果
      this.isOpen = false;

      // input 裡面的值都歸零
      this.protein = '';
      this.fat = '';
      this.fiber = '';
      this.water = '';
      this.ash = '';
      this.carbohydrate = 0;
      this.me = 0;

      this.me_protein = 0;
      this.me_fat = 0;
      this.me_carbohydrate = 0;

      this.me_protein_result = '';
      this.me_fat_result = '';
      this.me_carbohydrate_result = '';

      this.protein_colorClass = [];
      this.fat_colorClass = [];
      this.carbohydrate_colorClass = [];
    },

    math() {

      if (this.protein !== '' && this.fat !== '' && this.fiber !== '' && this.water !== '' && this.ash !== '') {
        // 開啟結果
        this.isOpen = true;

        // 計算碳水化合物
        this.carbohydrate = (100 - this.protein - this.fat - this.fiber - this.water - this.ash).toFixed(1);

        // 計算代謝能
        this.me = ((this.protein * 3.5) + (this.fat * 8.5) + (this.carbohydrate * 3.5)).toFixed(1);

        // 計算各數值的代謝能
        this.me_protein = ((this.protein * 3.5) / this.me * 100).toFixed(1);
        this.me_fat = ((this.fat * 8.5) / this.me * 100).toFixed(1);
        this.me_carbohydrate = ((this.carbohydrate * 3.5) / this.me * 100).toFixed(1);

        // 執行結果判斷
        this.critical_result();
      } else {
        alert('請填寫所有欄位');
      }

    },

    critical_result() {

      // 判斷蛋白質
      if (this.me_protein < 30) {
        this.me_protein_result = '太少了';
        this.protein_colorClass.push(this.colors[1]);
      };
      if (30 <= this.me_protein && this.me_protein < 50) {
        this.me_protein_result = '有點少';
        this.protein_colorClass.push(this.colors[1]);
      };
      if (50 <= this.me_protein && this.me_protein <= 60) {
        this.me_protein_result = '符合比例';
        this.protein_colorClass.push(this.colors[2]);
      };
      if (60 < this.me_protein && this.me_protein <= 80) {
        this.me_protein_result = '有點多';
        this.protein_colorClass.push(this.colors[2]);
      };
      if (this.me_protein > 80) {
        this.me_protein_result = '太多了';
        this.protein_colorClass.push(this.colors[0]);
      };

      // 判斷脂肪
      if (this.me_fat < 10) {
        this.me_fat_result = '太少了';
        this.fat_colorClass.push(this.colors[1]);
      };
      if (10 <= this.me_protein && this.me_protein < 30) {
        this.me_protein_result = '有點少';
        this.protein_colorClass.push(this.colors[1]);
      };
      if (30 <= this.me_fat && this.me_fat <= 55) {
        this.me_fat_result = '符合比例';
        this.fat_colorClass.push(this.colors[2]);
      };
      if (55 < this.me_fat && this.me_fat <= 75) {
        this.me_fat_result = '有點多';
        this.fat_colorClass.push(this.colors[2]);
      };
      if (this.me_fat > 75) {
        this.me_fat_result = '太多了';
        this.fat_colorClass.push(this.colors[0]);
      };

      // 判斷碳水化合物
      if (this.me_carbohydrate < 0) {
        this.me_carbohydrate_result = '太少了';
        this.carbohydrate_colorClass.push(this.colors[1]);
      };
      if (0 <= this.me_carbohydrate && this.me_carbohydrate < 5) {
        this.me_carbohydrate_result = '有點少';
        this.carbohydrate_colorClass.push(this.colors[1]);
      };
      if (5 <= this.me_carbohydrate && this.me_carbohydrate <= 10) {
        this.me_carbohydrate_result = '符合比例';
        this.carbohydrate_colorClass.push(this.colors[2]);
      };
      if (10 < this.me_carbohydrate && this.me_carbohydrate <= 15) {
        this.me_carbohydrate_result = '有點多';
        this.carbohydrate_colorClass.push(this.colors[2]);
      };
      if (this.me_carbohydrate > 15) {
        this.me_carbohydrate_result = '太多了';
        this.carbohydrate_colorClass.push(this.colors[0]);
      }

    }
  }
}
Vue.createApp(App).mount('#app');

