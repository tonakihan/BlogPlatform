<!--<style>
  .none {
    color: gray;
  }

  .json * {
    padding: 0;
    margin: 0;
  }

  .json .data,
  .json.data {
    color: #0383fb;
  }

  .json .type, 
  .json.type,
  .json .val {
    color: #19e71f;
  }

  .vertical {
    transform: rotate(270deg);
  }
  
  .yes {
    color: #f69716;
  }
  .no {
    color: #17e9d3;
  }
</style>-->

<h1> API </h1>

<h2> JSON data</h2>
<table align="center">
  <!--<colgroup>
    <col class="vertical">
    <col class="json data"/>
    <col />
    <col class="json type"/>
  </colgroup>-->
  <thead>
    <th> </th>
    <th> Field </th>
    <th> required <br> (send) </th>
    <th> Type </th>
    <th> Null <br> value (get) </th>
    <th> Role for data </th>
  </thead>
  <tbody>
    <tr>
      <th rowspan="6" class="vertical"> user </th>
      <td class="json data"> id </td>
      <td class="no"> no </td>
      <td class="json type"> number </td>
      <td>  </td>
      <td> id > 0 </td>
    </tr>
    <tr>
      <td class="json data"> firstName </td>
      <td class="yes"> yes </td>
      <td class="json type"> string </td>
      <td>  </td>
      <td> Length not more them 45 </td>
    </tr>
    <tr>
      <td class="json data"> lastName </td>
      <td class="yes"> yes </td>
      <td class="json type"> string </td>
      <td>  </td>
       <td> Length not more them 100 </td>
    </tr>
    <tr>
      <td class="json data"> nickname </td>
      <td class="yes"> yes </td>
      <td class="json type"> string </td>
      <td>  </td>
       <td> Length not more them 45 </td>
    </tr>
    <tr>
      <td class="json data"> email </td>
      <td class="yes"> yes </td>
      <td class="json type"> string </td>
      <td>  </td>
       <td> Length not more them 200 </td>
    </tr>
    <tr>
      <td class="json data"> role </td>
      <td class="no"> no </td>
      <td class="json type"> string </td>
      <td>  </td>
       <td> Length not more them 100 </td>
    </tr>
    <div></div>
    <tr>
      <th rowspan="6" class="vertical"> post </th>
      <td class="json data"> id </td>
      <td class="no"> no </td>
      <td class="json type"> number </td>
      <td>  </td>
      <td> id > 0 </td>
    </tr>
    <tr>
      <td class="json data"> authorId </td>
      <td class="yes"> yes </td>
      <td class="json type"> number </td>
      <td class="yes"> yes </td>
      <td> id > 0 </td>
    </tr>
    <tr>
      <td class="json data"> status </td>
      <td class="yes"> yes </td>
      <td class="json type"> string </td>
      <td>  </td>
      <td> One of the values: hide / visable </td>
    </tr>
    <tr>
      <td class="json data"> <s>filePath</s> </td>
      <td class="no"> no </td>
      <td class="json type"> string </td>
      <td class="yes"> yes </td>
      <td> Not use! Reserved </td>
    </tr>
    <tr>
      <td class="json data"> likes </td>
      <td class="no"> no </td>
      <td class="json type"> number </td>
      <td>  </td>
      <td class="none"> none </td>
    </tr>
    <tr>
      <td class="json data"> text </td>
      <td class="yes"> yes </td>
      <td class="json type"> string </td>
      <td>  </td>
      <td class="none"> none </td>
    </tr>
    <tr>
      <th rowspan="3" class="vertical"> subscribe </th>
      <td class="json data"> id </td>
      <td class="no"> no </td>
      <td class="json type"> number </td>
      <td>  </td>
      <td> id > 0 </td>
    </tr>
    <tr>
      <td class="json data"> userTargetId </td>
      <td class="yes"> yes </td>
      <td class="json type"> number </td>
      <td>  </td>
      <td> id > 0 </td>
    </tr>
    <tr>
      <td class="json data"> userObjectId </td>
      <td class="yes"> yes </td>
      <td class="json type"> number </td>
      <td>  </td>
      <td> id > 0 </td>
    </tr>
    <tr>
      <th rowspan="5" class="vertical"> comment </th>
      <td class="json data"> id </td>
      <td class="no"> no </td>
      <td class="json type"> number </td>
      <td>  </td>
      <td> id > 0 </td>
    </tr>
    <tr>
      <td class="json data"> authorId </td>
      <td class="yes"> yes </td>
      <td class="json type"> number </td>
      <td class="yes"> yes </td>
      <td> id > 0 </td>
    </tr>
    <tr>
      <td class="json data"> postId </td>
      <td class="yes"> yes </td>
      <td class="json type"> number </td>
      <td class="yes"> yes </td>
      <td> id > 0 </td>
    </tr>
    <tr>
      <td class="json data"> likes </td>
      <td class="no"> no </td>
      <td class="json type"> number </td>
      <td>  </td>
      <td class="none"> none </td>
    </tr>
    <tr>
      <td class="json data"> text </td>
      <td class="yes"> yes </td>
      <td class="json type"> string </td>
      <td>  </td>
      <td class="none"> none </td>
    </tr>
  </tbody>
</table>

<h2> User </h2>

<p> URL begin with "/api/user"</p>
<table align="center">
  <!--<colgroup>
    <col span="3" />
    <col span="2" class="json" />
  </colgroup>-->
  <thead>
    <tr>
      <th> Type request </th>
      <th> URL </th>
      <th> Description </th>
      <th> json (send) </th>
      <th> json (forward) </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> GET </td>
      <td> "/:id" </td>
      <td> Получить пользователя по id </td>
      <td class="none"> none </td>
      <td class="json"> &#123; user &#125; </td>
    </tr>
    <tr>
      <td> GET </td>
      <td> "/" </td>
      <td> Получить массив всех пользователей </td>
      <td class="none"> none </td>
      <td class="json"> &#91;&nbsp;&#123; user &#125;, ... &#93; </td>
    </tr>
    <tr>
      <td> POST </td>
      <td> "/" </td>
      <td> Создать нового пользователя. Вернет созданного пользователя </td>
      <td class="json"> &#123; user &#125; </td>
      <td class="json"> &#123; user &#125; </td>
    </tr>
    <tr>
      <td> PUT </td>
      <td> "/" </td>
      <td> Обновление / изменение данных пользователя </td>
      <td class="json"> &#123; user &#125; </td>
      <td class="json"> 
        &#123; 
        <p>&ensp;<span class="data">message</span>: <span class="val">"User was updated successfully!"</p> 
        &#125; 
      </td>
    </tr>
    <tr>
      <td> DELETE </td>
      <td> "/:id" </td>
      <td> Удаление пользователя по id </td>
      <td class="none"> none </td>
      <td class="json"> 
        &#123; 
        <p>&ensp;<span class="data">message</span>: <span class="val">"User was deleted successfully!"</p> 
        &#125; 
      </td>
    </tr>
  </tbody>
</table>

<h2> Post </h2>
<p> URL begin with "/api/post"</p>
<table align="center">
  <!--<colgroup>
    <col span="3" />
    <col span="2" class="json" />
  </colgroup>-->
  <thead>
    <tr>
      <th> Type request </th>
      <th> URL </th>
      <th> Description </th>
      <th> json (send) </th>
      <th> json (forward) </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> GET </td>
      <td> "/:id" </td>
      <td> Получить пост по id </td>
      <td class="none"> none </td>
      <td class="json"> &#123; post &#125; </td>
    </tr>
    <tr>
      <td> GET </td>
      <td> "/" </td>
      <td> Получить массив всех постов </td>
      <td class="none"> none </td>
      <td class="json"> &#91;&nbsp;&#123; post &#125;, ... &#93; </td>
    </tr>
    <tr>
      <td> POST </td>
      <td> "/" </td>
      <td> Создать новый пост. Вернет созданный пост </td>
      <td class="json"> &#123; post &#125; </td>
      <td class="json"> &#123; post &#125; </td>
    </tr>
    <tr>
      <td> PUT </td>
      <td> "/" </td>
      <td> Обновление / изменение поста </td>
      <td class="json"> &#123; post &#125; </td>
      <td class="json"> 
        &#123; 
        <p>&ensp;<span class="data">message</span>: <span class="val">"Post was updated successfully!"</p> 
        &#125; 
      </td>
    </tr>
    <tr>
      <td> DELETE </td>
      <td> "/:id" </td>
      <td> Удаление поста по id </td>
      <td class="none"> none </td>
      <td class="json"> 
        &#123; 
        <p>&ensp;<span class="data">message</span>: <span class="val">"Post was deleted successfully!"</p> 
        &#125; 
      </td>
    </tr>
  </tbody>
</table>

<h2> Comment </h2>
<p> URL begin with "/api/comment"</p>
<table align="center">
  <!--<colgroup>
    <col span="3" />
    <col span="2" class="json" />
  </colgroup>-->
  <thead>
    <tr>
      <th> Type request </th>
      <th> URL </th>
      <th> Description </th>
      <th> json (send) </th>
      <th> json (forward) </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> GET </td>
      <td> "/:id" </td>
      <td> Получить комментарий по его id </td>
      <td class="none"> none </td>
      <td class="json"> &#123; comment &#125; </td>
    </tr>
    <tr>
      <td> GET </td>
      <td> "/by_Post/:id" </td>
      <td> Получить массив всех комментариев по id поста </td>
      <td class="none"> none </td>
      <td class="json"> &#91;&nbsp;&#123; comment &#125;, ... &#93; </td>
    </tr>
    <tr>
      <td> GET </td>
      <td> "/by_User/:id" </td>
      <td> Получить массив всех комментариев по id автора комментариев </td>
      <td class="none"> none </td>
      <td class="json"> &#91;&nbsp;&#123; comment &#125;, ... &#93; </td>
    </tr>
    <tr>
      <td> POST </td>
      <td> "/" </td>
      <td> Создать новый комментарий. Вернет созданный комментарий. </td>
      <td class="json"> &#123; comment &#125; </td>
      <td class="json"> &#123; comment &#125; </td>
    </tr>
    <tr>
      <td> PUT </td>
      <td> "/" </td>
      <td> Обновление / изменение комментария </td>
      <td class="json"> &#123; comment &#125; </td>
      <td class="json"> 
        &#123; 
        <p>&ensp;<span class="data">message</span>: <span class="val">"Comment was updated successfully!"</p> 
        &#125; 
      </td>
    </tr>
    <tr>
      <td> DELETE </td>
      <td> "/:id" </td>
      <td> Удаление комментария по его id </td>
      <td class="none"> none </td>
      <td class="json"> 
        &#123; 
        <p>&ensp;<span class="data">message</span>: <span class="val">"Comment was deleted successfully!"</p> 
        &#125; 
      </td>
    </tr>
  </tbody>
</table>

<h2> Subscribe </h2>
<p> URL begin with "/api/subscribe"</p>
<table align="center">
  <!--<colgroup>
    <col span="3" />
    <col span="2" class="json" />
  </colgroup>-->
  <thead>
    <tr>
      <th> Type request </th>
      <th> URL </th>
      <th> Description </th>
      <th> json (send) </th>
      <th> json (forward) </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> GET </td>
      <td> "/:id" </td>
      <td> Получить все записи о подписках по id пользователя </td>
      <td class="none"> none </td>
      <td class="json"> &#123; subscribe &#125; </td>
    </tr>
    <tr>
      <td> GET </td>
      <td> "/count/subscribers/:id" </td>
      <td> Получить количество записей о подписанных на пользователя по id пользователя </td>
      <td class="none"> none </td>
      <td class="json"> 
        &#123; <span class="data">count</span>: <span class="val">12</span> &#125; 
        </td>
    </tr>
    <tr>
      <td> GET </td>
      <td> "/count/subscriptions/:id" </td>
      <td> Получить количество записей о подписках пользователя по id пользователя </td>
      <td class="none"> none </td>
      <td class="json"> 
        &#123; <span class="data">count</span>: <span class="val">12</span> &#125; 
        </td>
    </tr>
    <tr>
      <td> POST </td>
      <td> "/" </td>
      <td> Создать новую запись о подписке пользователя. Вернет запись о подписке </td>
      <td class="json"> &#123; subscribe &#125; </td>
      <td class="json"> &#123; subscribe &#125; </td>
    </tr>
    <tr>
      <td> DELETE </td>
      <td> "/:id" </td>
      <td> Удаление записи о подписке пользователя по id записи о подписке</td>
      <td class="none"> none </td>
      <td class="json"> 
        &#123; 
        <p>&ensp;<span class="data">message</span>: <span class="val">"Subscribe was deleted successfully!"</p> 
        &#125; 
      </td>
    </tr>
  </tbody>
</table>
