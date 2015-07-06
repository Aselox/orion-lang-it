i18n.map('it', {
  global: {
    save: 'Salva',
    create: 'Crea',
    logout: 'Logout',
    back: 'Indietro',
    cancel: 'Annulla',
    delete: 'Elimina',
    confirm: 'Conferma',
    choose: 'Scegli',
    noPermission: 'Non hai il permesso',
    passwordNotMatch: 'Le password non corrispondono',
    optional: 'Opzionale'
  },
  accounts: {
    schema: {
      emails: {
        title: 'Email',
        address: 'Indirizzo',
        verified: 'Verificato'
      },
      password: {
        title: 'Password',
        new: 'Nuova Password',
        confirm: 'Converma Password'
      },
      profile: {
        name: 'Nome'
      }
    },
    index: {
      title: 'Account',
      actions: {
        edit: 'Modifica',
      },
      tableTitles: {
        name: 'Nome',
        email: 'Email',
        roles: 'Ruoli',
        actions: 'Azioni'
      }
    },
    update: {
      title: 'Aggiorna Account',
      messages: {
        noPermissions: 'Non hai il permesso per modificare questo utente'
      },
      sections: {
        profile: {
          title: 'Profilo'
        },
        roles: {
          title: 'Ruoli',
          selectRoles: 'Scegli ruoli utente'
        },
        changePassword: {
          title: 'Cambia Password'
        },
        deleteUser: {
          title: 'Pericolo!',
          advice: 'L\eliminazione di utenti può causare problemi.',
          button: 'Elimina utente'
        }
      }
    },
    myAccount: {
      title: 'Mio Account',
    },
    create: {
      title: 'Create un Utente',
      createInvitation: 'Crea invito',
      createUserNow: 'Crea Utente Adesso',
      inviteOther: 'Invita Altri',
      selectRoles: 'Seleziona i ruoli del nuovo utente',
      email: 'Email',
      messages: {
        successfullyCreated: 'Invito creato con successo'
      }
    },
    changePassword: {
      title: 'Cambia Password',
    },
    updateProfile: {
      title: 'Aggiorna Profilo',
    },
    register: {
      title: 'Registra',
      registerButton: 'Registra',
      fields: {
        email: 'Email',
        name: 'Nome',
        password: 'Password',
        confirmPassword: 'Password (ripeti)'
      },
      messages: {
        invalidEmail: 'Email non valida',
        invalidInvitationCode: 'Codice d\'invito non valido',
      }
    }
  },
  collections: {
    create: {
      title: 'Crea un {$1}'
    },
    update: {
      title: 'Aggiorna {$1}'
    },
    delete: {
      title: 'Elmina {$1}',
      confirmQuestion: 'Sei sicuro di voler eliminare questo {$1}?'
    },
    common: {
      defaultPluralName: 'oggetti',
      defaultSingularName: 'oggetto',
    }
  },
  config: {
    update: {
      title: 'Config',
    }
  },
  dictionary: {
    update: {
      title: 'Dizionario'
    }
  },
  filesystem: {
    messages: {
      notFound_id: 'File non trovato [{$i}]',
      errorUploading: 'Errore nell\'upload del file',
      errorRemoving: 'Error nella rimozione del file',
    }
  },
  pages: {
    schema: {
      title: 'Titolo',
      url: 'Url',
    },
    index: {
      title: 'Pagine',
    },
    create: {
      title: 'Crea pagina',
      chooseTemplate: 'Scegli Template'
    },
    update: {
      title: 'Aggiorna pagina',
    },
    delete: {
      title: 'Elimina pagina',
      confirmQuestion: 'Sei sicuro di voler eliminare questa pagina?'
    }
  },
  attributes: {
    users: {
      pluralName: 'utenti',
      singularName: 'utente',
    },
    file: {
      choose: 'Scegli file',
      noFile: 'Nessun file',
    },
    image: {
      choose: 'Scegli immagine'
    }
  },
  tabular: {
    search: 'Cerca:',
    info: 'Mostrando _START_ a _END_ di _TOTAL_ voci',
    infoEmpty: 'Mostrando 0 a 0 di 0 voci',
    lengthMenu: 'Mostra _MENU_ voci',
    emptyTable: 'Nessun dato disponibile nella tabella',
    paginate: {
      first: 'Primo',
      previous: 'Precedente',
      next: 'Prossimo',
      last: 'Ultimo',
    }
  }
})