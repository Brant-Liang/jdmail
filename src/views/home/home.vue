<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <swiper :images="banners"/>
    <home-recommand :recommands="recommends"/>
    <feature-view/> 
    <tab-control class="tab-control" :titles="titles"/>
    <li>01</li>
    <li>02</li>
    <li>03</li>
    <li>04</li>
    <li>05</li>
    <li>06</li>
    <li>07</li>
    <li>08</li>
    <li>09</li>
    <li>10</li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
    <li>19</li>
    <li>20</li>
    <li>21</li>
    <li>22</li>
    <li>23</li>
    <li>24</li>
    <li>25</li>
    <li>26</li>
    <li>27</li>
    <li>28</li>
    <li>29</li>
    <li>30</li>
    <li>31</li>
    <li>32</li>
    <li>33</li>
    <li>34</li>
    <li>35</li>
    <li>36</li>
    <li>37</li>
    <li>38</li>
    <li>39</li>
    <li>40</li>
    <li>41</li>
    <li>42</li>
    <li>43</li>
    <li>44</li>
    <li>45</li>
    <li>46</li>
    <li>47</li>
    <li>48</li>
    <li>49</li>
    <li>50</li>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import swiper from './homeComponents/Swiper'
import HomeRecommand from './homeComponents/homeRecommand'
import FeatureView from './homeComponents/FeatureView'
import TabControl from 'components/content/tabControl/TabControl'

import { getMultiDate } from 'network/home'
export default {
  name: 'Home',
  data() {
    return {
      banners: null,
      recommends: null,
      titles: ['流行','新款','精选']
    }
  },
  components: {
    NavBar,
    swiper,
    HomeRecommand,
    FeatureView,
    TabControl
  },
  created() {
    getMultiDate().then(res => {
      console.log(res);
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0; 
    background-color: var(--color-tint);
    color: #ffffff;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>