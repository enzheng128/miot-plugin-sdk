import locale from "miot/host/locale";
const placeholderRegex = /(\{[\d|\w]+\})/;
const getStrings = strings => {
  const language = locale.language;
  return strings[language] || strings['zh'];
}
const formatString = (str, ...valuesForPlaceholders) => {
  return (str || '')
    .split(placeholderRegex)
    .filter(textPart => !!textPart)
    .map(textPart => {
      if (textPart.match(placeholderRegex)) {
        const matchedKey = textPart.slice(1, -1);
        let valueForPlaceholder = valuesForPlaceholders[matchedKey];
        // If no value found, check if working with an object instead
        if (valueForPlaceholder == undefined) {
          const valueFromObjectPlaceholder = valuesForPlaceholders[0][matchedKey];
          if (valueFromObjectPlaceholder !== undefined) {
            valueForPlaceholder = valueFromObjectPlaceholder;
          } else {
            // If value still isn't found, then it must have been undefined/null
            return valueForPlaceholder;
          }
        }
        return valueForPlaceholder;
      }
      return textPart;
    }).join('');
}
// 为了 autoComplete
let strings = {
  setting: '',
  featureSetting: '',
  commonSetting: '',
  name: '',
  location: '',
  memberSet: '',
  share: '',
  btGateway: '',
  voiceAuth: '',
  ifttt: '',
  firmwareUpgrade: '',
  more: '',
  help: '',
  legalInfo: '',
  deleteDevice: '',
  autoUpgrade: '',
  checkUpgrade: '',
  security: '',
  feedback: '',
  timezone: '',
  addToDesktop: '',
  // MHDatePicker
  cancel: '',
  ok: '',
  am: '',
  pm: '',
  months: '',
  days: '',
  hours: '',
  minutes: '',
  seconds: '',
  month: '',
  day: '',
  hour: '',
  minute: '',
  second: '',
  yearUnit: '',
  monthUnit: '',
  dayUnit: '',
  hourUnit: '',
  minuteUnit: '',
  secondUnit: '',
  dateSubTitle: '',
  time24SubTitle: '',
  time12SubTitle: '',
  singleSubTitle: '',
  firmwareUpgradeExit: '',
  firmwareUpgradeUpdate: '',
  firmwareUpgradeLook: '',
  firmwareUpgradeForceUpdate: '',
  firmwareUpgradeForceUpdating: '',
  firmwareUpgradeNew_pre: '',
  firmwareUpgradeNew_sub: '',
}
strings = getStrings({
  zh: {
    setting: '设置',
    featureSetting: '功能设置',
    commonSetting: '通用设置',
    name: '设备名称',
    location: '位置管理',
    memberSet: '按键设置',
    share: '设备共享',
    btGateway: '蓝牙网关',
    voiceAuth: '语音授权',
    ifttt: '智能场景',
    firmwareUpgrade: '固件升级',
    more: '更多设置',
    help: '使用帮助',
    legalInfo: '法律信息',
    deleteDevice: '删除设备',
    autoUpgrade: '固件自动升级',
    checkUpgrade: '检查固件升级',
    security: '安全设置',
    feedback: '反馈问题',
    timezone: '设备时区',
    addToDesktop: '添加桌面快捷方式',
    // MHDatePicker
    cancel: '取消',
    ok: '确定',
    am: '上午',
    pm: '下午',
    months: '个月',
    days: '天',
    hours: '小时',
    minutes: '分钟',
    seconds: '秒钟',
    month: '个月',
    day: '天',
    hour: '小时',
    minute: '分钟',
    second: '秒钟',
    yearUnit: '年',
    monthUnit: '月',
    dayUnit: '日',
    hourUnit: '时',
    minuteUnit: '分',
    secondUnit: '秒',
    dateSubTitle: '{0}年{1}月{2}日', // 2019年06月03日
    time24SubTitle: '{0}:{1}', // 11:43
    time12SubTitle: '{0} {1}:{2}', // 上午 11:43
    singleSubTitle: '{0} {1}', // 5 小时
    firmwareUpgradeExit: '退出',
    firmwareUpgradeUpdate: '升级',
    firmwareUpgradeLook: '去看看',
    firmwareUpgradeForceUpdate: '由于您当前的设备固件版本过低，一些功能可能无法正常使用。请升级至最新版本，以体验更丰富的功能',
    firmwareUpgradeForceUpdating: '您的设备正在升级，请稍后，以体验更丰富的功能',
    firmwareUpgradeNew_pre: '检测到设备有最新固件版本',
    firmwareUpgradeNew_sub: '，是否升级',
  },
  zh_tw: {
    setting: '設定',
    featureSetting: '功能設定',
    commonSetting: '一般設定',
    name: '裝置名稱',
    location: '位置管理',
    memberSet: '按鍵設定',
    share: '裝置共用',
    btGateway: '藍牙網關',
    voiceAuth: '語音授權',
    ifttt: '智能場景',
    firmwareUpgrade: '韌體更新',
    more: '更多設定',
    help: '使用説明',
    legalInfo: '法律資訊',
    deleteDevice: '刪除裝置',
    autoUpgrade: '韌體自动更新',
    checkUpgrade: '檢查韌體更新',
    security: '安全設定',
    feedback: '反饋問題',
    timezone: '裝置時區',
    addToDesktop: '新増捷徑至桌面',
    firmwareUpgradeExit: '退出',
    firmwareUpgradeUpdate: '升級',
    firmwareUpgradeLook: '看看',
    firmwareUpgradeForceUpdate: '由於您目前的用戶端版本過低，一些功能可能無法正常使用。 請升級最新版本，以體驗更豐富的功能',
    firmwareUpgradeForceUpdating: '您的裝置正在升級，請稍後，以體驗更豐富的功能',
    firmwareUpgradeNew_pre: '檢測到裝置有最新韌體版本',
    firmwareUpgradeNew_sub: '，是否升級',
  },
  zh_hk: {
    setting: '設定',
    featureSetting: '功能設定',
    commonSetting: '一般設定',
    name: '裝置名稱',
    location: '位置管理',
    memberSet: '按鍵設定',
    share: '裝置共用',
    btGateway: '藍牙網關',
    voiceAuth: '語音授權',
    ifttt: '智慧場景',
    firmwareUpgrade: '韌體更新',
    more: '更多設定',
    help: '使用説明',
    legalInfo: '法律資訊',
    deleteDevice: '刪除裝置',
    autoUpgrade: '韌體自动更新',
    checkUpgrade: '檢查韌體更新',
    security: '安全設定',
    feedback: '反饋問題',
    timezone: '裝置時區',
    addToDesktop: '新增捷徑到桌面',
    firmwareUpgradeExit: '退出',
    firmwareUpgradeUpdate: '升級',
    firmwareUpgradeLook: '去看看',
    firmwareUpgradeForceUpdate: '由於您目前的用戶端版本過低，一些功能可能無法正常使用。 請升級最新版本，以體驗更豐富的功能',
    firmwareUpgradeForceUpdating: '您的裝置正在升級，請稍後，以體驗更豐富的功能',
    firmwareUpgradeNew_pre: '檢測到裝置有最新韌體版本',
    firmwareUpgradeNew_sub: '，是否升級',
  },
  en: {
    setting: 'Settings',
    featureSetting: 'Shortcut settings',
    commonSetting: 'General settings',
    name: 'Device name',
    location: 'Manage locations',
    memberSet: 'Key settings',
    share: 'Shared devices',
    btGateway: 'BLE Gateway',
    voiceAuth: 'Voice authorization',
    ifttt: 'Automation',
    firmwareUpgrade: 'Firmware updates',
    more: 'Additional settings',
    help: 'Help',
    legalInfo: 'Legal information',
    deleteDevice: 'Remove device',
    autoUpgrade: 'Automatically update firmware',
    checkUpgrade: 'Check for firmware updates',
    security: 'Security settings',
    feedback: 'Feedback',
    timezone: 'Device time zone',
    addToDesktop: 'Add to Home screen',
    // MHDatePicker
    cancel: 'Cancel',
    ok: 'Confirm',
    am: 'AM',
    pm: 'PM',
    months: 'months',
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
    month: 'month',
    day: 'day',
    hour: 'hour',
    minute: 'minute',
    second: 'second',
    yearUnit: '',
    monthUnit: '',
    dayUnit: '',
    hourUnit: '',
    minuteUnit: '',
    secondUnit: '',
    dateSubTitle: '{0}-{1}-{2}', // 2019-06-03
    time24SubTitle: '{0}:{1}', // 11:43
    time12SubTitle: '{1}:{2} {0}', // 11:43 am
    singleSubTitle: '{0} {1}', // 1 hour | 2 hours
    firmwareUpgradeExit: 'Exit',
    firmwareUpgradeUpdate: 'Update',
    firmwareUpgradeLook: 'Take a look',
    firmwareUpgradeForceUpdate: 'Current firmware may be too old to run some features. Update to the latest version for better experience.',
    firmwareUpgradeForceUpdating: 'Your device is updating, try again later',
    firmwareUpgradeNew_pre: 'Firmware update ',
    firmwareUpgradeNew_sub: ' available. Update now?',
  },
  ko: {
    setting: '설정',
    featureSetting: '바로가기 설정',
    commonSetting: '일반 설정',
    name: '기기 이름',
    location: '위치 관리',
    memberSet: '버튼 설정',
    share: '공유된 기기',
    btGateway: 'BLE 게이트웨이',
    voiceAuth: '음성 권한',
    ifttt: '자동화',
    firmwareUpgrade: '펌웨어 업데이트',
    more: '추가 설정',
    help: '도움말',
    legalInfo: '법률 정보',
    deleteDevice: '기기 제거',
    autoUpgrade: '펌웨어 자동 업데이트',
    checkUpgrade: '펌웨어 업데이트 확인',
    security: '보안 설정',
    feedback: '피드백',
    timezone: '디바이스 시간대',
    addToDesktop: '홈 화면에 추가',
    firmwareUpgradeExit: '나가기',
    firmwareUpgradeUpdate: '업데이트',
    firmwareUpgradeLook: '확인해보세요',
    firmwareUpgradeForceUpdate: '현재 펌웨어 버전이 너무 오래되었습니다. 몇몇 기능이 정상적으로 작동하지 않을 수 있습니다. 더 나은 사용을 위해 최신 버전으로 업데이트 하십시오.',
    firmwareUpgradeForceUpdating: '기기를 업데이트 중입니다. 나중에 다시 시도하십시오.',
    firmwareUpgradeNew_pre: '펌웨어 업데이트 ',
    firmwareUpgradeNew_sub: ' 가능, 지금 업데이트 하시겠습니까?',
  },
  ru: {
    setting: 'Настройки',
    featureSetting: 'Настройки ярлыков',
    commonSetting: 'Общие настройки',
    name: 'Имя устройства',
    location: 'Управлять местами',
    memberSet: 'Настройка кнопок',
    share: 'Общие устройства',
    btGateway: 'BLE шлюз',
    voiceAuth: 'Голосовая авторизация',
    ifttt: 'Автоматизация',
    firmwareUpgrade: 'Проверить наличие обновлений',
    more: 'Дополнительные настройки',
    help: 'Справка',
    legalInfo: 'Легальная информация',
    deleteDevice: 'Удалить устройство',
    autoUpgrade: 'Автоматическое обновление встроенного ПО',
    checkUpgrade: 'Проверить наличие обновлений',
    security: 'Параметры безопасности',
    feedback: 'Отзыв',
    timezone: 'Часовой пояс устройства',
    addToDesktop: 'Добавить на главный экран',
    firmwareUpgradeExit: 'Выход',
    firmwareUpgradeUpdate: 'Обновление',
    firmwareUpgradeLook: 'Посмотреть',
    firmwareUpgradeForceUpdate: 'Текущая версия ПО устарела, некоторые возможности могут быть недоступны. Обновите до последней версии ПО.',
    firmwareUpgradeForceUpdating: 'Устройство обновляется, попробуйте позже',
    firmwareUpgradeNew_pre: 'Доступно обновление ПО ',
    firmwareUpgradeNew_sub: ', обновить сейчас?',
  },
  es: {
    setting: 'Configuración',
    featureSetting: 'Ajustes de acceso directo',
    commonSetting: 'Ajustes generales',
    name: 'Nombre del dispositivo',
    location: 'Gestionar ubicaciones',
    memberSet: 'Ajustes de los botones',
    share: 'Dispositivos compartidos',
    btGateway: 'Entrada BLE',
    voiceAuth: 'Autorización de voz',
    ifttt: 'Automatización',
    firmwareUpgrade: 'Actualizaciones de firmware',
    more: 'Ajustes adicionales',
    help: 'Ayuda',
    legalInfo: 'Información legal',
    deleteDevice: 'Eliminar dispositivo',
    autoUpgrade: 'Actualizar automáticamente el firmware',
    checkUpgrade: 'Buscar actualizaciones de firmware',
    security: 'Ajustes de seguridad',
    feedback: 'Comentario',
    timezone: 'Zona horaria del dispositivo',
    addToDesktop: 'Añadir a la pantalla de Inicio',
    firmwareUpgradeExit: 'Salir',
    firmwareUpgradeUpdate: 'Actualizar',
    firmwareUpgradeLook: 'Echa un vistazo',
    firmwareUpgradeForceUpdate: 'La versión de firmware actual es demasiado antigua, puede que algunas características no funcionen correctamente. Actualiza a la última versión para una mejor experiencia.',
    firmwareUpgradeForceUpdating: 'Tu dispositivo se está actualizando, inténtalo más tarde',
    firmwareUpgradeNew_pre: 'Actualización ',
    firmwareUpgradeNew_sub: ' de firmware disponible, ¿actualizar ahora?',
  },
  fr: {
    setting: 'Paramètres',
    featureSetting: 'Réglages des raccourcis',
    commonSetting: 'Réglages généraux',
    name: "Nom de l'appareil",
    location: 'Gérer les emplacements',
    memberSet: 'Paramètres des boutons',
    share: 'Appareils partagés',
    btGateway: 'Passerelle BLE',
    voiceAuth: 'Autorisation vocale',
    ifttt: 'Automatisation',
    firmwareUpgrade: 'Les mises à jour du micrologiciel',
    more: 'Paramètres supplémentaires',
    help: 'Aide',
    legalInfo: 'Information légale',
    deleteDevice: "Supprimer l'appareil",
    autoUpgrade: 'Mise à jour automatique du firmware',
    checkUpgrade: 'Vérifier les mises à jour du micrologiciel',
    security: 'Paramètres de sécurité',
    feedback: 'Retour',
    timezone: 'Fuseau horaire de l’appareil',
    addToDesktop: "Ajouter à l'écran d'accueil'",
    firmwareUpgradeExit: 'Quitter',
    firmwareUpgradeUpdate: 'Mettre à jour',
    firmwareUpgradeLook: 'Jeter un coup d\'œil',
    firmwareUpgradeForceUpdate: 'La version actuelle du micrologiciel est trop ancienne. Certaines fonctionnalités peuvent ne pas fonctionner correctement. Mettre à jour la dernière version pour une meilleure expérience',
    firmwareUpgradeForceUpdating: 'Votre appareil est en cours de mise à jour. Réessayez plus tard',
    firmwareUpgradeNew_pre: 'Mise à jour du micrologiciel ',
    firmwareUpgradeNew_sub: ' disponible. Mettre à jour maintenant ?',
  },
  it: {
    setting: 'Impostazioni',
    featureSetting: 'Impostazioni collegamenti',
    commonSetting: 'Impostazioni generali',
    name: 'Nome dispositivo',
    location: 'Gestisci posizioni',
    memberSet: 'Impostazioni pulsante',
    share: 'Dispositivi condivisi',
    btGateway: 'Gateway BLE',
    voiceAuth: 'Autorizzazione vocale',
    ifttt: 'Automazione',
    firmwareUpgrade: 'Aggiornamenti firmware',
    more: 'Impostazioni aggiuntive',
    help: 'Guida',
    legalInfo: 'Informazione legale',
    deleteDevice: 'Rimuovi dispositivo',
    autoUpgrade: 'Aggiorna automaticamente il firmware',
    checkUpgrade: 'Controlla aggiornamenti firmware',
    security: 'Impostazioni di sicurezza',
    feedback: 'Feedback',
    timezone: 'Fuso orario del dispositivo',
    addToDesktop: 'Aggiungi a schermata iniziale',
    firmwareUpgradeExit: 'Esci',
    firmwareUpgradeUpdate: 'Aggiorna',
    firmwareUpgradeLook: 'Guarda',
    firmwareUpgradeForceUpdate: 'La versione firmware in uso è obsoleta. Alcune funzioni potrebbero non funzionare correttamente. Esegui l\'aggiornamento alla versione più recente per usufruire di prestazioni migliori.',
    firmwareUpgradeForceUpdating: 'Il dispositivo è in fase di aggiornamento. Riprova più tardi',
    firmwareUpgradeNew_pre: 'Aggiornamento firmware ',
    firmwareUpgradeNew_sub: ' disponibile. Aggiornare adesso?',
  },
  de: {
    setting: 'Einstellungen',
    featureSetting: 'Verknüpfungseinstellungen',
    commonSetting: 'Allgemeine Einstellungen',
    name: 'Gerätename',
    location: 'Standorte verwalten',
    memberSet: 'Schaltflächen-Einstellungen',
    share: 'Geteilte Geräte',
    btGateway: 'BLE-Gateway',
    voiceAuth: 'Identitätsnachweis über die Stimme',
    ifttt: 'Automatisierung',
    firmwareUpgrade: 'Firmware-Aktualisierungen',
    more: 'Zusätzliche Einstellungen',
    help: 'Hilfe',
    legalInfo: 'Rechtsinformation',
    deleteDevice: 'Geräte entfernen',
    autoUpgrade: 'Firmware automatisch aktualisieren',
    checkUpgrade: 'Nach Firmware-Aktualisierungen suchen',
    security: 'Sicherheitseinstellungen',
    feedback: 'Feedback',
    timezone: 'Gerätezeitzone',
    addToDesktop: 'Zur Startseite hinzufügen',
    firmwareUpgradeExit: 'Beenden',
    firmwareUpgradeUpdate: 'Aktualisieren',
    firmwareUpgradeLook: 'Ansehen',
    firmwareUpgradeForceUpdate: 'Aktuelle Firmware-Version ist zu alt, einige Funktionen arbeiten möglicherweise nicht korrekt. Aktualisieren Sie auf die neueste Version, um eine verbesserte Funktionsausführung zu erzielen.',
    firmwareUpgradeForceUpdating: 'Ihr Gerät wird aktualisiert, versuchen Sie es später erneut',
    firmwareUpgradeNew_pre: 'Firmware-Aktualisierung ',
    firmwareUpgradeNew_sub: ' verfügbar, jetzt aktualisieren?',
  },
  id: {
    setting: 'Pengaturan',
    featureSetting: 'Pengaturan pintasan',
    commonSetting: 'Pengaturan umum',
    name: 'Nama perangkat',
    location: 'Kelola lokasi',
    memberSet: 'Pengaturan tombol',
    share: 'Perangkat yang dibagikan',
    btGateway: 'Gerbang BLE',
    voiceAuth: 'Otorisasi suara',
    ifttt: 'Otomatisasi',
    firmwareUpgrade: 'Pembaruan firmware',
    more: 'Pengaturan tambahan',
    help: 'Bantuan',
    legalInfo: 'Informasi hukum',
    deleteDevice: 'Hapus perangkat',
    autoUpgrade: 'Perbarui firmware secara otomatis',
    checkUpgrade: 'Periksa pembaruan firmware',
    security: 'Pengaturan keamanan',
    feedback: 'Umpan balik',
    timezone: 'Zona waktu perangkat',
    addToDesktop: 'Tambahkan ke layar Beranda',
    firmwareUpgradeExit: 'Keluar',
    firmwareUpgradeUpdate: 'Perbarui',
    firmwareUpgradeLook: 'Lihat',
    firmwareUpgradeForceUpdate: 'Versi firmware saat ini sudah terlalu lama. Beberapa fitur mungkin tidak berfungsi dengan benar. Perbarui ke versi terbaru untuk menikmati pengalaman yang lebih baik.',
    firmwareUpgradeForceUpdating: 'Perangkat sedang diperbarui, coba lagi nanti',
    firmwareUpgradeNew_pre: 'Pembaruan firmware ',
    firmwareUpgradeNew_sub: ' tersedia, perbarui sekarang?',
  },
  pl: {
    setting: 'Ustawienia',
    featureSetting: 'Ustawienia skrótów',
    commonSetting: 'Ustawienia ogólne',
    name: 'Nazwa urządzenia',
    location: 'Zarządzaj lokalizacjami',
    memberSet: 'Ustawienia przycisku',
    share: 'Udostępnione urządzenia',
    btGateway: 'Bramka BLE',
    voiceAuth: 'Autoryzacja głosu',
    ifttt: 'Automatyzacja',
    firmwareUpgrade: 'Aktualizacje oprogramowania sprzętowe',
    more: 'Dodatkowe ustawienia',
    help: 'Pomoc',
    legalInfo: 'Informacje prawne',
    deleteDevice: 'Usuń urządzenie',
    autoUpgrade: 'Automatyczna aktualizacja oprogramowania układowego',
    checkUpgrade: 'Sprawdź aktualizacje oprogramowania sprzętowe',
    security: 'Ustawienia bezpieczeństwa',
    feedback: 'Informacje zwrotne',
    timezone: 'Strefa czasowa urządzenia',
    addToDesktop: 'Dodaj do ekranu głównego',
    firmwareUpgradeExit: 'Wyjdź',
    firmwareUpgradeUpdate: 'Aktualizuj',
    firmwareUpgradeLook: 'Przegląd',
    firmwareUpgradeForceUpdate: 'Aktualna wersja oprogramowania sprzętowego jest zbyt stara, aby niektóre funkcje działały poprawnie. Zaktualizuj do najnowszej wersji, aby poprawić użytkowanie.',
    firmwareUpgradeForceUpdating: 'Urządzenie jest aktualizowane, spróbuj ponownie później.',
    firmwareUpgradeNew_pre: 'Dostępna jest aktualizacja oprogramowania sprzętowego dla ',
    firmwareUpgradeNew_sub: '. Zaktualizować teraz?',
  },
  vi: {
    setting: 'Cài đặt',
    featureSetting: 'Cài đặt phím tắt',
    commonSetting: 'Cài đặt chung',
    name: 'Tên thiết bị',
    location: 'Quản lý các vị trí',
    memberSet: 'Cài đặt nút',
    share: 'Thiết bị dùng chung',
    btGateway: 'Cổng BLE',
    voiceAuth: 'Cấp quyền bằng giọng nói',
    ifttt: 'Tự động',
    firmwareUpgrade: 'Kiểm tra bản cập nhật chương trình cơ sở',
    more: 'Cài đặt khác',
    help: 'Trợ giúp',
    legalInfo: 'Thông tin hợp pháp',
    deleteDevice: 'Xóa thiết bị',
    autoUpgrade: 'Tự động cập nhật chương trình cơ sở',
    checkUpgrade: 'Kiểm tra bản cập nhật chương trình cơ sở',
    security: 'Cài đặt bảo mật',
    feedback: 'Phản hồi',
    timezone: 'Múi giờ thiết bị',
    addToDesktop: 'Thêm vào Màn hình chính',
    firmwareUpgradeExit: 'Thoát',
    firmwareUpgradeUpdate: 'Cập nhật',
    firmwareUpgradeLook: 'Xem xét',
    firmwareUpgradeForceUpdate: 'Phiên bản chương trình cơ sở hiện tại quá cũ, một số tính năng có thể không hoạt động bình thường. Cập nhật lên phiên bản mới nhất để có trải nghiệm tốt hơn.',
    firmwareUpgradeForceUpdating: 'Thiết bị của bạn đang cập nhật, hãy thử lại sau',
    firmwareUpgradeNew_pre: 'Đã có bản cập nhật chương trình cơ sở ',
    firmwareUpgradeNew_sub: ', cập nhật ngay bây giờ?',
  },
  ja: {
    setting: '設定',
    featureSetting: 'ショートカット設定',
    commonSetting: '全般設定',
    name: 'デバイス名',
    location: '位置を管理する',
    memberSet: 'ボタンの設定',
    share: '共有デバイス',
    btGateway: 'BLE ゲートウェイ',
    voiceAuth: '音声承認',
    ifttt: '自動化',
    firmwareUpgrade: 'ファームウェア更新する',
    more: '詳細設定',
    help: 'ヘルプ',
    legalInfo: '法律情報',
    deleteDevice: 'デバイスを削除する',
    autoUpgrade: 'ファームウェアの自動アップグレード',
    checkUpgrade: 'ファームウェア更新プログラムの有無を確認する',
    security: 'セキュリティ設定',
    feedback: 'フィードバック',
    timezone: 'デバイスタイムゾーン',
    addToDesktop: 'ホーム画面に追加する',
    firmwareUpgradeExit: '終了',
    firmwareUpgradeUpdate: '更新',
    firmwareUpgradeLook: '調べる',
    firmwareUpgradeForceUpdate: '現在のファームウェア バージョンは古すぎます。一部の機能が正しく動作しないおそれがあります。ユーザー エクスペリエンスを高めるため、最新バージョンに更新してください。',
    firmwareUpgradeForceUpdating: 'デバイスは更新中です。後で再試行してください',
    firmwareUpgradeNew_pre: 'ファームウェア更新プログラム ',
    firmwareUpgradeNew_sub: ' が公開されています。今すぐ更新しますか?',
  },
  th: {
    setting: 'การตั้งค่า',
    featureSetting: 'การตั้งค่าทางลัด',
    commonSetting: 'การตั้งค่าทั่วไป',
    name: 'ชื่ออุปกรณ์',
    location: 'จัดการตำแหน่งที่ตั้ง',
    memberSet: 'การตั้งค่าปุ่ม',
    share: 'อุปกรณ์ที่แชร์',
    btGateway: 'เกตเวย์ BLE',
    voiceAuth: 'การอนุญาตด้วยเสียง',
    ifttt: 'ระบบอัตโนมัติ',
    firmwareUpgrade: 'ตรวจสอบหาการอัปเดตเฟิร์มแวร์',
    more: 'การตั้งค่าเพิ่มเติม',
    help: 'ความช่วยเหลือ',
    legalInfo: 'ข้อมูลทางกฎหมาย',
    deleteDevice: 'ลบอุปกรณ์ออก',
    autoUpgrade: 'อัปเดตเฟิร์มแวร์โดยอัตโนมัติ',
    checkUpgrade: 'ตรวจสอบหาการอัปเดตเฟิร์มแวร์',
    security: 'การตั้งค่าความปลอดภัย',
    feedback: 'คำติชม',
    timezone: 'โซนเวลาของอุปกรณ์',
    addToDesktop: 'เพิ่มไปยังหน้าโฮม',
    firmwareUpgradeExit: 'ออก',
    firmwareUpgradeUpdate: 'อัปเดต',
    firmwareUpgradeLook: 'ลองดู',
    firmwareUpgradeForceUpdate: 'เวอร์ชั่นเฟิร์มแวร์ปัจจุบันเก่าไป ฟีเจอร์บางอย่างอาจทำงานไม่ถูกต้อง อัปเดตเป็นเวอร์ชั่นล่าสุดเพื่อประสบการณ์การใช้งานที่ดีขึ้น',
    firmwareUpgradeForceUpdating: 'อุปกรณ์กำลังอัปเดต ลองอีกครั้งในภายหลัง',
    firmwareUpgradeNew_pre: 'เฟิร์มแวร์อัปเดต ',
    firmwareUpgradeNew_sub: ' ใช้ได้แล้ว อัปเดตตอนนี้หรือไม่',
  }
});
export default strings;
export { formatString };