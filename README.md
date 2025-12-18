# 源码说明

石器时代融合查询器是通过JS代码编写的，使用yarn管理代码并通过WEBPACK打包为safusion.bundle.js文件。

# 源码结构

- `src/`：源码目录
  - `index.js`：融合查询器主要实现JS代码
- `dist/`：发布目录
  - `css/`：样式文件目录
  - `data/`：配置和数据文件目录
    - `img/`：存放宠物动态图，以图片编号命名，具体请看pet.ini文件对应的图片编号
    - `pet.ini`：宠物数据文件
    - `def.ini`：融合配置文件
  - `index.html`：展示页面，加载`safusion.bundle.js`文件
  - `safusion.bundle.js`：由webpack打包**自动生成**
  - `safusion.bundle.js.LICENSE.txt`：由webpack打包**自动生成**
- `package.json`：yarn配置文件
- `webpack.config.js`：Webpack配置文件

# 源码使用
## 源码编译
1. 安装yarn：`npm install -g yarn`
2. 安装依赖：`yarn install`
3. 编译打包：`yarn build`

## 打包发布
### 配置def.ini文件
- `defwork`：基数值，通常不需要修改。defwork对应的是普通融合宠物的基数值（与石器源码对应），defwork2对应的是飞机头的基数值
- `defbase`：宠物成长档最大值，defbase对应的是普通融合宠的成长档最大值（与石器源码对应），defbase2对应的是飞机头的成长档最大值
- `deftran`：MM转宠基数，通常不需要修改
- `itemtype`：五级药数值，通常不需要修改
- `itemmax`：最大喂药总和，通常不需要修改

### 配置pet.ini文件
- `data`：宠物数据，格式为：宠物名称=ID,初始能力,野生成长,体,力,耐,敏,地,水,火,风,图像ID,种族
- 根据石器服务器的enemybase1.txt配置data即可，其他通常不需要修改

### 修改index.html文件
index.html是页面展示文件，可根据需要自行修改。

### 网站发布
最后，将dist目录下的文件发布到你的网站即可。
